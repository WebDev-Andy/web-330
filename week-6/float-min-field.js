/*
========================================
; File: float-min-field.js
; Author: Andrew Britt
; Date: 1 July 2022
; Description: FloatMinField class and constructor 
; Reference: WEB-330 assignment PDF week-6
; Date reference accessed: 1 July 2022
========================================
*/

// Create FloatMinField class
export class FloatMinField 
{
  constructor(name, field, min)
  {
    this.name = name;
    this.field = field;
    this.min = min;
  }
  // compares if field value is greater than min value
  validate()
  {
    if (parseFloat(this.field) > this.min)
    {
      return true;
    }
    else return false;
  }
  // returns error message
  getMessage()
  {
    return `${this.name} must be more than ${this.min}. You entered ${this.field}.`;
  }
}