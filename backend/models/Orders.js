const mongoose = require("mongoose")
const {Schema} = mongoose;

const orderSchema = new Schema({
    name : String,
    qty : Number,
    price : Number,
    mode : String,      // Mode - Buy or Sell 
})

const Order = mongoose.model("Order" , orderSchema)

module.exports = Order