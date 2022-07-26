const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    calorieRequirement: Number,
    mealPlan: [{
        time: Date.now,
        type: mongoose.Schema.Types.ObjectId,
        ref: "meal"
    }],
});

const user = mongoose.model("user", userSchema);
module.exports = user;