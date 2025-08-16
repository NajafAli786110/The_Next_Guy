const app = require("../app");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");

//  Get all products
const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: `Products fetched`,
      products,
    });
  } catch (error) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
};

//  Create products -- Admin
const createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    message: "Product created successfully!",
    Product: product,
  });
});

// Update Product  -- Admin
const updateProduct = catchAsyncErrors(async (req, res, next) => {
  const { updateProduct } = req.body;
  let productId = await Product.findById(req.params.id);

  if (!productId) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  let product = await Product.findByIdAndUpdate(req.params.id, updateProduct, {
    new: true,
    runValidators: true,
  });

  return res.status(200).json({
    success: true,
    message: "Product updated successfully!",
    updatedProduct: product,
  });
});

// Delete Product -- Admin
const deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const productId = await Product.findByIdAndDelete(req.params.id);

  if (!productId) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  await Product.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    success: true,
    message: "Product Deleted Successfully!",
  });
});

// Product Detail
const getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }

  return res.status(200).json({
    success: true,
    message: "Product Found!",
    product,
  });
});

module.exports = {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
};
