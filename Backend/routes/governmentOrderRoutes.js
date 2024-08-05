// routes/governmentOrderRoutes.js

const express = require('express');
const {
  createGovernmentOrder,
  getAllGovernmentOrders,
  getGovernmentOrderById,
  updateGovernmentOrder,
  deleteGovernmentOrder,
} = require('../controllers/governmentOrderController');

const router = express.Router();

// Create a new government order
router.post('/governmentorders', createGovernmentOrder);

// Get all government orders
router.get('/governmentorders', getAllGovernmentOrders);

// Get a government order by ID
router.get('/governmentorders/:id', getGovernmentOrderById);

// Update a government order
router.put('/governmentorders/:id', updateGovernmentOrder);

// Delete a government order
router.delete('/governmentorders/:id', deleteGovernmentOrder);

module.exports = router;
