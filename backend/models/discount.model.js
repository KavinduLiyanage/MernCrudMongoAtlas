const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const discountSchema = new Schema({
    productName: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Discount = mongoose.model('Discount', discountSchema);

module.exports = Discount;
