const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    productDes : {
        type : String
    },
    productPrice : {
        type : Number
    }
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
