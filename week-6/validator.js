/*
========================================
; File: validator.js
; Author: Andrew Britt
; Date: 1 July 2022
; Description:Validator class, functions and boolean comparisons  
; Reference: WEB-330 assignment PDF week-6
; Reference: https://developer.mozilla.org/en-US/docs/Glossary/Boolean
; Reference: https://riptutorial.com/javascript/example/6842/the-logical-not-operator----
; Date reference accessed: 1 July 2022
========================================
*/

// JS imports
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

// Create Validator class
export class Validator 
{
  // Properties assigned to empty arrays
  validators = [];
  messages = [];
    constructor(name, field) 
    {
      this.name = name;
      this.field = field;
    }

  // Adding assigned functions
  addRequiredField() 
  {
    this.validators.push(new RequiredField(this.name, this.field));
  }
  addRequiredFloatField() 
  {
    this.validators.push(new FloatField(this.name, this.field));
  }
  addFloatMinField(min) 
  {
    this.validators.push(new FloatMinField(this.name, this.field, min));
  }
  addFloatMaxField(max) 
  {
    this.validators.push(new FloatMaxField(this.name, this.field, max));
  }

  // Function to iterate over and validate required values or returns error message for failure
  validate() 
  {
    for (let validator of this.validators) 
    {
      if (!validator.validate()) 
      {
        this.messages.push(validator.getMessage());
        return false;
      }
    }
    return true;
  }
}

