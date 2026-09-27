const Position = require("../models/Position")

module.exports.getAllPositions = async (req, res) => {
    try {
        let allPositions = await Position.find({})
        res.status(200).json(allPositions)
    } catch (error) {
        console.error("Error fetching positions:", error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
}

