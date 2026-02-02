const Order = require('../models/Order'); // You must have this model created

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
exports.createOrder = async (req, res) => {
  const { items, total } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ message: 'No order items' });
  }

  try {
    const order = await Order.create({
      user: req.user.id,  // From the middleware
      items,
      total,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error creating order' });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }); // Find orders for the logged-in user
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching orders' });
  }
};

