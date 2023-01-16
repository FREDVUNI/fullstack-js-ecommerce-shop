const express = require("express")
const router = express.Router()
const Products = require("../controllers/Products")

router.get("/products",Products.getProducts)
router.get("/products/:id",Products.getProduct)

module.exports = router