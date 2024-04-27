const express = require('express');
const csvParser = require('csv-parser');
const fs = require('fs');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Route handler for converting CSV data into lowercase
router.post('/convert-to-lowercase', upload.single('csvFile'), (req, res, next) => {
  const transformedData = [];

  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on('data', (data) => {
      const transformedRow = {};
      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          transformedRow[key.toLowerCase()] = data[key].toLowerCase();
        }
      }
      transformedData.push(transformedRow);
    })
    .on('end', () => {
      res.json(transformedData);
    })
    .on('error', (err) => {
      next(err);
    });
});


router.post('/convert-to-json', upload.single('csvFile'), (req, res, next) => {
  const transformedData = [];

  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on('data', (data) => {
      transformedData.push(data);
    })
    .on('end', () => {
      res.json(transformedData);
    })
    .on('error', (err) => {
      next(err);
    });
});

module.exports = router;
