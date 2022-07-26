const FoodItem = require("../models/foodItemSchema");
const Meal = require("../models/mealSchema");

exports.addMealItems = (req, res)=>{
        // console.log(req.body);
        FoodItem.find({}, (err, data)=>{
            if(err) console.log(err);
            else{
                console.log(data);
                // res.send(data);
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
    
