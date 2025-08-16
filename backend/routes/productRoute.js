const express = require("express");
const {
  getAllProduct,
  createProduct,
} = require("../controllers/productControllers");
const router = express.Router();

router.route("/product").get(getAllProduct);
router.route("/product/create").post(createProduct);
router.route("/product/update").post(createProduct);

module.exports = router;
