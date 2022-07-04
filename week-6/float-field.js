/*
========================================
; File: float-field.js
; Author: Andrew Britt
; Date: 1 July 2022
; Description: FloatField class and constructor 
; Reference: WEB-330 assignment PDF week-6
; Reference: https://www.w3schools.com/jsref/jsref_parsefloat.asp
; Reference: https://www.w3schools.com/jsref/jsref_isnan.asp
; Date reference accessed: 1 July 2022
========================================
*/

// Create FloatField class
export class FloatField
{
  constructor(name, field)
  {
    this.name = name;
    this.field = field;
  }
  // To Check if field isNan or can be parseFloat
  validate()
  {
    if (isNaN(this.field))
    {
      return false;
    }
    return true;
  }
  // Gives error message if field isNaN
  getMessage()
  {
    return `${this.name} must be a float value. You entered ${this.field}`;
  }
}