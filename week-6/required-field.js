/*
========================================
; File: required-field.js
; Author: Andrew Britt
; Date: 1 July 2022
; Description: RequiredField class and constructor 
; Reference: WEB-330 assignment PDF week-6
; Date reference accessed: 1 July 2022
========================================
*/

// Create and export RequiredField Class
export class RequiredField 
{
    constructor(name, field) 
    {
        this.name = name;
        this.field = field;
    }
    validate() 
    {
        return Boolean(this.field);
    }
    getMessage() 
    {
        return `${this.name} is a required field!`;
    }
}