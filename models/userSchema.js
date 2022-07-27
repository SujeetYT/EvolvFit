const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    calorieRequirement: Number,
    time: Number,
    mealPlan: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "meal"
    }],
});

const User = mongoose.model("user", userSchema);
module.exports = User;