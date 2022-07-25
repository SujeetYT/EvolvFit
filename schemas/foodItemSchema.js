const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"]
    },
    calories: {
        type: Number,
        required: true
    },
    protien: {
        type: Number,
        required: true
    },
    carb: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required : true
    },
    acceptedUnits: {
        type: String,
        required: true,
        lowercase: true,
        enum: {
            values : ["ml", "liter", "kg", "g", "item"],
            message: '{VALUE} is not a valid unit'
        }
    },
    itemWeight:{
        type: Number,
        required: true,
    }
});

const foodItem = mongoose.model("foodItem", foodItemSchema);
module.exports = foodItem;