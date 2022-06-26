/*
========================================
; File: cart-component.js
; Author: Andrew Britt
; Date: 24 Jun 2022
; Description: Cart Component class and constructor 
; Reference: WEB-330 assignment PDF week-5
; Reference: https://www.w3schools.com/Jsref/jsref_class_super.asp
; Reference: https://github.com/buwebdev/web-330/blob/master/portfolio/header.js
; Date reference accessed: 24 June 2022
========================================
*/

// CartComponent Class
export class CartComponent extends HTMLElement
{
    constructor()
    {
        super();
    }
    connectedCallback()
    {
        this.innerHTML = `
            <i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)
        `;
    }
}

customElements.define("cart-component", CartComponent);