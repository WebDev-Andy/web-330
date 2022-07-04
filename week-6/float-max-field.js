/*
========================================
; File: float-max-field.js
; Author: Andrew Britt
; Date: 1 July 2022
; Description: FloatMaxField class and constructor 
; Reference: WEB-330 assignment PDF week-6
; Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
; https://www.w3schools.com/jsref/jsref_parsefloat.asp
; Reference: https://www.w3schools.com/jsref/jsref_if.asp
; Date reference accessed: 1 July 2022
========================================
*/

// Create FloatMaxField class
export class FloatMaxField 
{
  constructor(name, field, max)
  {
    this.name = name;
    this.field = field;
    this.max = max;
  }

  // this compares if parseFloat number is less than max parameter
  validate()
  {
    if (parseFloat(this.field) < this.max)
    {
      return true;
    }
    else return false;
  }

  // returns error message 
  getMessage()
  {
    return `${this.name} must be less than ${this.max}. You entered ${this.field}.`;
  }
}