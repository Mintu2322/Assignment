const { json } = require('express');
const Product = require('../model/Product');

// Get All Product

const product_all = async (req, res, next) => {
    try {
        const product = await product.find();
        res.send(json())
    }catch  (err) {
        res.send({err: err.message});
    }
};

// Add New product
const product_create = async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        details: req.body.details
      });
    
      try {
        const savedProduct = await product.save();
        res.send(savedProduct);
      } catch (error) {
        res.status(400).send(error);
      }
};
module.exports = product_all;