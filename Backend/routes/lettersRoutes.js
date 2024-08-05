// routes/letters.js

const express = require('express');
const {
  createLetter,
  getAllLetters,
  getLetterById,
  updateLetter,
  deleteLetter,
} = require('../controllers/lettersController');

const router = express.Router();

router.post('/letters', createLetter);
router.get('/letters', getAllLetters);
router.get('/letters/:id', getLetterById);
router.put('/letters/:id', updateLetter);
router.delete('/letters/:id', deleteLetter);

module.exports = router;
