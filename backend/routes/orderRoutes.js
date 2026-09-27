const express = require("express");
const router = express.Router()
const {newOrder, getAllOrders} = require("../controllers/orderController")


router.post("/newOrder", newOrder)
router.get("/allOrders", getAllOrders)

module.exports = router