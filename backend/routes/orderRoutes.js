const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createOrder, getUserOrders } = require('../controllers/orderController');

router.post('/', authMiddleware, createOrder);
router.get('/', authMiddleware, getUserOrders);

module.exports = router;
