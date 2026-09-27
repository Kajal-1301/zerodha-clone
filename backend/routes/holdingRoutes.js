const express = require("express");
const router = express.Router();
const {getAllHoldings} = require("../controllers/holdingController")


router.get("/", getAllHoldings )

module.exports = router