const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [
    {
      productId: String,
      name: String,
      qty: Number,
      price: Number,
    },
  ],
  total: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
