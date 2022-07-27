const FoodItem = require("../models/foodItemSchema");
const Meal = require("../models/mealSchema");
const User = require("../models/userSchema");

exports.addMealItems = (req, res)=>{
        // console.log(req.body);
        FoodItem.find({}, (err, data)=>{
            if(err) console.log(err);
            else{
                console.log(data);
            }   
        })
        const {category, name, foodItems} = req.body;
        const newMeal = new Meal({category, name, foodItems});
        newMeal.save().then(()=>{
            return res.status(201).json({
                message: "document created successfully"
            });
        }).catch((err)=>{
            res.send(err.message);
        }
    )
}

exports.addFoodItems = (req, res)=>{
    // console.log(req.body);
    const {name, calories, protien, carb, fat, acceptedUnits, itemWeight} = req.body;
    const newFootItem = new FoodItem({name, calories, protien, carb, fat, acceptedUnits, itemWeight});
    newFootItem.save().then(()=>{
        return res.status(201).json({
            message: "document created successfully"
        });
    }).catch((err)=>{
        res.send(err.message);
    })
}

exports.addUser = (req, res)=>{
    console.log(req.body);
    const {name, calorieRequirement, time,  mealPlan} = req.body;
    const newUser = new User({name, calorieRequirement, time, mealPlan});
    newUser.save().then(()=>{
        return res.status(201).json({
            message: "document created successfully"
        });
    }).catch((err)=>{
        res.send(err.message);
    })
}
