// controllers/letterTemplatesController.js

const LetterTemplate = require('../models/LetterTemplate');

// Create a new letter template
const createLetterTemplate = async (req, res) => {
  try {
    const { template_name, template_content } = req.body;
    const letterTemplate = await LetterTemplate.create({
      template_name,
      template_content,
    });
    res.status(201).json(letterTemplate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all letter templates
const getAllLetterTemplates = async (req, res) => {
  try {
    const letterTemplates = await LetterTemplate.findAll();
    res.status(200).json(letterTemplates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a letter template by ID
const getLetterTemplateById = async (req, res) => {
  try {
    const { id } = req.params;
    const letterTemplate = await LetterTemplate.findByPk(id);
    if (!letterTemplate) {
      return res.status(404).json({ message: 'Letter template not found' });
    }
    res.status(200).json(letterTemplate);
  } catch (error) {
    res.status500().json({ error: error.message });
  }
};

// Update a letter template
const updateLetterTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const { template_name, template_content } = req.body;
    const letterTemplate = await LetterTemplate.findByPk(id);
    if (!letterTemplate) {
      return res.status(404).json({ message: 'Letter template not found' });
    }
    await letterTemplate.update({
      template_name,
      template_content,
    });
    res.status(200).json(letterTemplate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a letter template
const deleteLetterTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const letterTemplate = await LetterTemplate.findByPk(id);
    if (!letterTemplate) {
      return res.status(404).json({ message: 'Letter template not found' });
    }
    await letterTemplate.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createLetterTemplate,
  getAllLetterTemplates,
  getLetterTemplateById,
  updateLetterTemplate,
  deleteLetterTemplate,
};
