/*
========================================
; File: food-model.js
; Author: Andrew Britt
; Date: 15 Jun 2022
; Description: Food Model class and constructor 
; Reference: WEB-330 assignment PDF week-4
; Date reference accessed: 15 June 2022
========================================
*/  

// Class constructor FoodModel
export class FoodModel 
{
    constructor(id, name, calories)
    {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
}