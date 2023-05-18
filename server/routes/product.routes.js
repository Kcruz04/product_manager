const ProductController = require('../controllers/product.controller');


module.exports = (app) => {
    //Main route
    app.get('/api', ProductController.index)

    
    //Create product
    app.post('/api/create', ProductController.createProduct)

    //Read all
    app.get('/api/allProducts', ProductController.allProducts)

    //Read One
    app.get('/api/oneProduct/:id', ProductController.oneProduct)

    //Update One by ID
    app.patch('api/updateProduct/:id')
}

