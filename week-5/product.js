/*
========================================
; File: product.js
; Author: Andrew Britt
; Date: 24 Jun 2022
; Description: Product class and constructor 
; Reference: WEB-330 assignment PDF week-5
; Date reference accessed: 24 June 2022
========================================
*/

// Product class
export class Product 
{
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
}