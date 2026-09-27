const Holding = require("../models/Holdings")

module.exports.getAllHoldings = async (req, res) => {
    try {
        
        let allHoldings = await Holding.find({})
        res.status(200).json(allHoldings);

    } catch (error) {

        console.error("Error fetching holdings:", error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }

}