// controllers/lettersController.js

const Letter = require('../models/Letter');

// Create a new letter
const createLetter = async (req, res) => {
  try {
    const { citizen_id, addressee_id, title, photo, date, template_id, user_id } = req.body;
    const letter = await Letter.create({
      citizen_id,
      addressee_id,
      title,
      photo,
      date,
      template_id,
      user_id,
    });
    res.status(201).json(letter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all letters
const getAllLetters = async (req, res) => {
  try {
    const letters = await Letter.findAll();
    res.status(200).json(letters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a letter by ID
const getLetterById = async (req, res) => {
  try {
    const { id } = req.params;
    const letter = await Letter.findByPk(id);
    if (!letter) {
      return res.status(404).json({ message: 'Letter not found' });
    }
    res.status(200).json(letter);
  } catch (error) {
    res.status500().json({ error: error.message });
  }
};

// Update a letter
const updateLetter = async (req, res) => {
  try {
    const { id } = req.params;
    const { citizen_id, addressee_id, title, photo, date, template_id, user_id } = req.body;
    const letter = await Letter.findByPk(id);
    if (!letter) {
      return res.status(404).json({ message: 'Letter not found' });
    }
    await letter.update({
      citizen_id,
      addressee_id,
      title,
      photo,
      date,
      template_id,
      user_id,
    });
    res.status(200).json(letter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a letter
const deleteLetter = async (req, res) => {
  try {
    const { id } = req.params;
    const letter = await Letter.findByPk(id);
    if (!letter) {
      return res.status(404).json({ message: 'Letter not found' });
    }
    await letter.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createLetter,
  getAllLetters,
  getLetterById,
  updateLetter,
  deleteLetter,
};
