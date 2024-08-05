// controllers/governmentOrderController.js

const GovernmentOrder = require('../models/GovernmentOrder');

// Create a new government order
const createGovernmentOrder = async (req, res) => {
  try {
    const {
      order_type,
      house_no,
      date,
      status,
      user_id
    } = req.body;
    const governmentOrder = await GovernmentOrder.create({
      order_type,
      house_no,
      date,
      status,
      user_id
    });
    res.status(201).json(governmentOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all government orders
const getAllGovernmentOrders = async (req, res) => {
  try {
    const governmentOrders = await GovernmentOrder.findAll();
    res.status(200).json(governmentOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a government order by ID
const getGovernmentOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const governmentOrder = await GovernmentOrder.findByPk(id);
    if (!governmentOrder) {
      return res.status(404).json({ message: 'Government order not found' });
    }
    res.status(200).json(governmentOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a government order
const updateGovernmentOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      order_type,
      house_no,
      date,
      status,
      user_id
    } = req.body;
    const governmentOrder = await GovernmentOrder.findByPk(id);
    if (!governmentOrder) {
      return res.status(404).json({ message: 'Government order not found' });
    }
    await governmentOrder.update({
      order_type,
      house_no,
      date,
      status,
      user_id
    });
    res.status(200).json(governmentOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a government order
const deleteGovernmentOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const governmentOrder = await GovernmentOrder.findByPk(id);
    if (!governmentOrder) {
      return res.status(404).json({ message: 'Government order not found' });
    }
    await governmentOrder.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createGovernmentOrder,
  getAllGovernmentOrders,
  getGovernmentOrderById,
  updateGovernmentOrder,
  deleteGovernmentOrder,
};
