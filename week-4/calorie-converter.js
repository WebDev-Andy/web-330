/*
==========================================
; File: calorie-converter.js
; Author: Andrew Britt
; Date: 15 Jun 2022
; Description: 
; Reference: WEB-330 assignment PDF week-4
; Date reference accessed: 15 June 2022
==========================================
*/
// importing of FoodModel class from food-model.js
import { FoodModel } from "./food-model.js";

export class CalorieConverter 
{
        static data = [ 
            new FoodModel(1007, "Egg", 78),
            new FoodModel(1008, "Apple", 95),
            new FoodModel(1009, "Hamburger", 354),
            new FoodModel(1010, "Fries", 400),
            new FoodModel(1011, "Banana", 105),
            new FoodModel(1012, "Soda", 150),
         ]
         
         static find(name)
         {
            
            return this.data.filter(item=>item.name.toLowerCase().includes(name))
         }
}

// document.getElementById("searchResults").innerHTML = "";
// console.log(CalorieConverter.data);





