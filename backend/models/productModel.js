const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please Enter Product Name"],
  },
  decription: {
    type: String,
    required: [true, "Please Enter Product Decription"],
  },
  price: {
    type: Number,
    maxLength: [8, "Price cannot exceed 8 character"],
    required: [true, "Please Enter Product price}"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter product category"],
  },
  Stock: {
    type: Number,
    required: [true, "Please Enter Product stock"],
    maxLength: [4, "Stock cannot exceed 4 character"],
    default: 1,
  },
  NumberOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);