const productModel = require('../models/productModel')

class productController{
    index(req, res, next){
        // Get product from model
        const products = productModel.list();
        // Pass data to view to display list of product
        res.render('product/index.hbs', {products});
    }
}

module.exports = new productController