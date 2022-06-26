/*
========================================
; File: shopping-cart.js
; Author: Andrew Britt
; Date: 24 Jun 2022
; Description: Shopping Cart class and constructor 
; Reference: WEB-330 assignment PDF week-5
; Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
; Reference: https://www.w3schools.com/jsref/jsref_length_array.asp
; Date reference accessed: 24 June 2022
========================================
*/
// ShoppingCart class
export class ShoppingCart 
{
        //constructor creating _products array
        constructor()
        {
            // empty array created = _products
            this._products = [];
        }
        // count function returning array length i.e. (amount)
        count()
        {
            return this._products.length;
        }
        // add function to push objects into the empty array
        add(products)
        {
            this._products.push(products);
        }
    // iterator to iterate over array and return products
    //*[Symbol.iterator] ()
        * iterator()
    {
        for(let product of this._products)
        {
            yield product;
        }
    }
}