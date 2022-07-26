const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
    category: {
        type: String,
        enum:{
            values: ["Breakfast", "Lunch", "Evening Snack", "Dinner"],
            message: '{VALUE} is not a valid unit'
        },
        required: true
    },
    name: {
        type: String,
        required: true
    },
    foodItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "foodItem"
    }],
});

const Meal = mongoose.model("meal", mealSchema);
module.exports = Meal;