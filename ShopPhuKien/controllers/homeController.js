const productModel = require('../models/productModel');

exports.index = (req, res, next) => {
    // Get product from model
    const product = productModel.list();
    // Pass data to view to display list of product
    res.render('home/index.hbs', {product});
}