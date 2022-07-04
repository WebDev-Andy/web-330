/*
========================================
; File: finance-calculator.js
; Author: Andrew Britt
; Date: 1 July 2022
; Description: FinanceCalculator class and static functions 
; Reference: WEB-330 assignment PDF week-6
; Date reference accessed: 1 July 2022
========================================
*/

// Create FinanceCalculator class
export class FinanceCalculator
{
  static MONTHS_IN_YEAR = 12;
  static calculateFutureValue(monthlyPayment, rate, years)
  {
    let month = years * FinanceCalculator.MONTHS_IN_YEAR;
    let interestRate = 1 + rate/100;
    let presentValue = monthlyPayment * month;
    let futureValue = presentValue * (Math.pow(interestRate, month));
    return futureValue.toFixed(2);
  }

  static convertToCurrency(field)
  {
    let currencyFormatter = new Intl.NumberFormat('en-US',
    {
      style: 'currency',
      currency: 'USD'
    });
    return currencyFormatter.format(field);
  }
}