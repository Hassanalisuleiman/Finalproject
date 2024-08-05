// routes/letterTemplates.js

const express = require('express');
const {
  createLetterTemplate,
  getAllLetterTemplates,
  getLetterTemplateById,
  updateLetterTemplate,
  deleteLetterTemplate,
} = require('../controllers/letterTemplatesController');

const router = express.Router();

router.post('/lettertemplates', createLetterTemplate);
router.get('/lettertemplates', getAllLetterTemplates);
router.get('/lettertemplates/:id', getLetterTemplateById);
router.put('/lettertemplates/:id', updateLetterTemplate);
router.delete('/lettertemplates/:id', deleteLetterTemplate);

module.exports = router;
