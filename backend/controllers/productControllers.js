const Product = require("../models/productModel");

const getAllProduct = async (req, res) => {
  const getProducts = await Product.findOne({price});
  res.status(200).json({
    message: "Res is good at 200",
    product: getProducts,
  });
};

const createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    message: "Product created successfully! Product is:",
    Product: product,
  });
};

module.exports = {
  getAllProduct,
  createProduct,
};
