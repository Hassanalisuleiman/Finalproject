// routes/printedLetters.js

const express = require('express');
const {
  createPrintedLetter,
  getAllPrintedLetters,
  getPrintedLetterById,
  updatePrintedLetter,
  deletePrintedLetter,
} = require('../controllers/printed_letterController');

const router = express.Router();

router.post('/printed-letters', createPrintedLetter);
router.get('/printed-letters', getAllPrintedLetters);
router.get('/printed-letters/:id', getPrintedLetterById);
router.put('/printed-letters/:id', updatePrintedLetter);
router.delete('/printed-letters/:id', deletePrintedLetter);

module.exports = router;
