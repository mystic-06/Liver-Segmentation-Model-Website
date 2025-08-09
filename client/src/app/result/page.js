"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Result(){
    const [originalUrl, setOriginalUrl] = useState(null);
    const [predictedUrl, setPredictedUrl] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined'){
            setOriginalUrl(sessionStorage.getItem('originalImageUrl'));
            setPredictedUrl(sessionStorage.getItem('predictedImageUrl'));
        }
    }, []);

    return(
        <>
            <main className="min-h-screen w-full px-6 md:px-12 lg:px-20 py-10">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold">Segmentation Result</h1>
                    <Link href="/model" className="w-37 h-10 rounded-2xl bg-gray-950 text-white text-l hover:bg-gray-900 hover:scale-102 cursor-pointer active:bg-gray-950 transition-all duration-300 ease-in-out ml-10 flex items-center justify-center text-center">Back to Upload</Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl font-semibold mb-4">Original Image (mid-slice)</h2>
                        {originalUrl ? (
                            <img src={originalUrl} alt="Original" className="max-h-[70vh] object-contain border rounded shadow" />
                        ) : (
                            <div className="text-gray-500">No original image available.</div>
                        )}
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-xl font-semibold mb-4">Predicted Mask</h2>
                        {predictedUrl ? (
                            <img src={predictedUrl} alt="Predicted" className="max-h-[70vh] object-contain border rounded shadow" />
                        ) : (
                            <div className="text-gray-500">No predicted image available.</div>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}