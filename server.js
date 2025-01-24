const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const uploadDir = 'uploads';

// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = path.join(uploadDir, 'data_siswa');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/data_siswa/upload', upload.single('file'), (req, res) => {
    res.json({ message: 'File uploaded successfully' });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
