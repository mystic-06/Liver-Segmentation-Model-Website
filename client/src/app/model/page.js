"use client";
import React, {useCallback , useState} from 'react'
import {useDropzone} from 'react-dropzone'
import Link from "next/link"
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Model(){
    const [uploadedFile, setUploadedFile] = useState(null);
    const [uploaded,setUploadStatus] = useState(false)
    const [preview, setPreview] = useState(null);
    const [error, setError] = useState('');
    const router = useRouter();

    const onDrop = useCallback( async (acceptedFiles) => {
        const file = acceptedFiles[0]
        if(!file){
            setError('No file selected')
            return
        }

        const formData = new FormData()
        formData.append('image',file)

        try{
            const response = await axios.post('http://localhost:3001/upload',formData,{ 
                headers: {
                    'Content-Type':'multipart/form-data',
                },
            });
            
            setUploadedFile({
                ...response.data,
                uFile: file    
            })
            setUploadStatus(true)

            setError('');
            console.log('File uploaded successfully:',response.data.filePath)
        }
        catch(err){
            if (err.response) {
                console.error('Server Response:', err.response.data);
            }
            console.error('API CALL FAILED:', err);
            setError('File upload failed. Please try again.')
        }
  }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: {
        'application/dicom': ['.dcm'],
        'application/octet-stream': ['.nii', '.nii.gz'],
      'image/jpeg': [],
      'image/png': [],
    
    },
    multiple: false
    })

    async function onGoBack(){
        if (!uploadedFile) return; 
        
        try {
        const filename = uploadedFile.fileName;
        await axios.delete(`http://localhost:3001/delete/${filename}`);

        console.log('File deletion requested successfully.');
        setUploadedFile(null);
        setUploadStatus(false);
        setError('');

        } catch (err) {
            console.error('Error requesting file deletion:', err);
            setError('Could not delete file. Please try again.');
        }
    }

    async function onProceed(){
        if(!uploadedFile.uFile){
            setError('No file selected')
            return
        }

        console.log(uploadedFile.uFile)
        const predictForm = new FormData();
        predictForm.append('file', uploadedFile.uFile);
        const originalForm = new FormData();
        originalForm.append('file', uploadedFile.uFile);

        try{
            const [originalRes, predictRes] = await Promise.all([
                axios.post('http://localhost:8000/original', originalForm, {
                    headers: { 'Content-Type':'multipart/form-data' },
                    responseType: 'blob',
                }),
                axios.post('http://localhost:8000/predict', predictForm, {
                    headers: { 'Content-Type':'multipart/form-data' },
                    responseType: 'blob',
                })
            ]);

            const originalBlob = new Blob([originalRes.data], { type: 'image/png' });
            const predictedBlob = new Blob([predictRes.data], { type: 'image/png' });
            const originalURL = URL.createObjectURL(originalBlob);
            const predictedURL = URL.createObjectURL(predictedBlob);

            if (typeof window !== 'undefined'){
                sessionStorage.setItem('originalImageUrl', originalURL);
                sessionStorage.setItem('predictedImageUrl', predictedURL);
            }

            router.push('/result');
        } catch (err) {
            console.error('Error sending file to model backend:', err);
            setError('Processing failed. Please try again.');
        }
    }
    return(
        <>  
            <main className="h-screen flex justify-center mt-10">
                {uploaded ? (
                    <div className="flex flex-col">
                        <h2 className="text-3xl font-bold">Uploaded File : </h2>
                        <div className='flex flex-row mt-5'>
                            <img src='/imageIcon.svg' className='h-50'></img>
                            <div className='flex flex-col font-roboto text-xl ml-10 mt-2'>
                                <h1>{uploadedFile.originalName}</h1>
                                <h1>{(uploadedFile.fileSize/1000000).toFixed(2)} MB</h1>
                            </div>
                        </div>
                        <div className='font-roboto mt-15'>
                            <button onClick={onGoBack} className="w-40 h-14 rounded-2xl border-gray-200 border-2 bg-white text-Black text-xl hover:bg-gray-100 hover:scale-102 cursor-pointer active:bg-gray-200 transition-all duration-300 ease-in-out">Go Back</button>
                            <button onClick={onProceed} className="w-40 h-14 rounded-2xl bg-gray-950 text-white text-xl hover:bg-gray-900 hover:scale-102 cursor-pointer active:bg-gray-950 transition-all duration-300 ease-in-out ml-10">Proceed</button>
                        </div>
                    </div>
                ) : (
                 <div {...getRootProps()} className="flex flex-col w-270 h-100 border-gray-200 border-4 border-dashed items-center justify-center rounded-xl animate-fade-in ">
                    {
                        isDragActive ?
                        <div>
                            <video src="/Upload Files.mp4" width="200" height="200" autoPlay muted loop>
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </div>
                        :
                        <div>
                            <h1 className="text-2xl font-roboto font-bold">Upload Medical Image for Liver Segmentation</h1>
                            <p className="text-center">Drag and Drop to upload the medical images.<br />Supported formats: DICOM, NIfTI</p>
                            <input {...getInputProps()} />
                        </div>
                    }

                </div>)}
            </main>
        </>
    );
}