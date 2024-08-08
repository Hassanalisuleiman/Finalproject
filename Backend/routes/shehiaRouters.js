const express = require('express');
const router = express.Router();
const shehiaController = require('../controllers/shehia');

router.post('/shehia', shehiaController.createShehia);
router.get('/shehia', shehiaController.getAllShehias);
router.get('/shehia/:id', shehiaController.getShehiaById);
router.put('/shehia/:id', shehiaController.updateShehia);
router.delete('/shehia/:id', shehiaController.deleteShehia);

module.exports = router;
