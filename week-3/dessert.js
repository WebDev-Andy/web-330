/*
===========================================
; File: dessert.js
; Author: Andrew Britt
; Date: 6 Jun 2022
; Description: Dessert JS file for week-3 assignment
; Reference: WEB-330 assign pdf from Professors Krasso & Kumar
; Date reference accessed: 11 June 2022
===========================================
*/  
import { Product } from "./product.js";

export class Dessert extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}