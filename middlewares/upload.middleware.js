const multer = require('multer');
const path = require('path');

const fs = require('fs');

const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure storage settings
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads'); // Directory to store uploaded files
    },
    filename: function (req, file, cb) {
      const fileName = Date.now() + path.extname(file.originalname);
      req.file = fileName;
      cb(null, fileName); // Rename file
    }
});

// Initialize Multer with storage
const upload = multer({ storage: storage });

module.exports = {upload};