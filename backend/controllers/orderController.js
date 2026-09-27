const Order = require("../models/Orders")

module.exports.newOrder = async (req, res) => {
    try {
        let { name, qty, price, mode } = req.body
        let newOrder = new Order({ name, qty, price, mode })
        await newOrder.save()
        res.status(201).json({
            message: "Order created successfully."
        });
    } catch (error) {
        console.error("Order error:", error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
}

module.exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch orders",
    });
  }
};

