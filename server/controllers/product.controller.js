const {Product} = require('../models/product.model');

// Main route
module.exports.index = (req,res) => {
    res.json({
        message: "First route is successfull"
    })
}

//Create Product
module.exports.createProduct = (req,res) => {
    const { title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err));
}

//Read All
module.exports.allProducts = (req,res) => {
    //this is the find function that 'req'/requests
    Product.find()
    //we use 'res' because this is after the 'req' has returned
    .then(allProducts => res.json(allProducts))
    .catch(err => res.json(err));
}

//Read One
module.exports.oneProduct = (req,res) => {
    console.log(req.params)
    //idfromparams is express variable
    //comes from '/:id' in route
    const idFromParams = req.params.id
    Product.findOne({_id: idFromParams})
    .then(oneProduct => res.json(oneProduct))
    .catch(err => res.json(err));
}

//Update Product
module.exports.updateProduct = (req,res) => {
    const idFromParams = req.params.id;
    const updateProduct = req.body;
    Product.findOneAndUpdate({_id: idFromParams}, updateProduct, {new: true})
    .then(updateProduct => res.json(updateProduct))
    // .catch(err => res.json({err:'err'}))
    .catch(err => res.status(400).json(err));

}

module.exports.deleteProduct =(req,res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}

