// controllers/conflictRecordsController.js

const ConflictRecord = require('../models/ConflictRecord');

// Create a new conflict record
const createConflictRecord = async (req, res) => {
  try {
    const { characters, reasons, solutions, citizen_id } = req.body;
    const conflictRecord = await ConflictRecord.create({
      characters,
      reasons,
      solutions,
      citizen_id,
    });
    res.status(201).json(conflictRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all conflict records
const getAllConflictRecords = async (req, res) => {
  try {
    const conflictRecords = await ConflictRecord.findAll();
    res.status(200).json(conflictRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a conflict record by ID
const getConflictRecordById = async (req, res) => {
  try {
    const { id } = req.params;
    const conflictRecord = await ConflictRecord.findByPk(id);
    if (!conflictRecord) {
      return res.status(404).json({ message: 'Conflict record not found' });
    }
    res.status(200).json(conflictRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a conflict record
const updateConflictRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const { characters, reasons, solutions, citizen_id } = req.body;
    const conflictRecord = await ConflictRecord.findByPk(id);
    if (!conflictRecord) {
      return res.status(404).json({ message: 'Conflict record not found' });
    }
    await conflictRecord.update({
      characters,
      reasons,
      solutions,
      citizen_id,
    });
    res.status(200).json(conflictRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a conflict record
const deleteConflictRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const conflictRecord = await ConflictRecord.findByPk(id);
    if (!conflictRecord) {
      return res.status(404).json({ message: 'Conflict record not found' });
    }
    await conflictRecord.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createConflictRecord,
  getAllConflictRecords,
  getConflictRecordById,
  updateConflictRecord,
  deleteConflictRecord,
};
