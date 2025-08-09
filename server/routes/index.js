var express = require('express')
var router = express.Router()
var upload = require('./multer')
const path = require('path')
const fs = require('fs/promises')
const axios = require('axios')
const FormData = require('form-data');

router.post('/upload', upload.single('image'), (req, res) => {
  const filePath = path.join(__dirname, 'uploads', req.file.filename);
  
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  res.json({
    status: 'success',
    message: 'File uploaded successfully',
    filePath: `${filePath}`,
    fileName: req.file.filename,
    originalName: req.file.originalname,
    fileSize: req.file.size,
  })
});

router.delete('/delete/:filename', async (req,res)=>{
  const { filename } = req.params;
  const filePath = path.join(__dirname, '..', 'uploads', filename);

  try {
    await fs.unlink(filePath);
    res.status(200).send({ message: 'File deleted successfully.' });
  } catch (err) {
    console.error('Error deleting file:', err);
    res.status(500).send({ message: 'Failed to delete the file.' });
  }
})

module.exports = router;