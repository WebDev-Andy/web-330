/*
===========================================
; File: theme.js
; Author: Andrew Britt
; Date: 28 May 2022
; Description: JavaScript code for theme files web-330
; Reference: Professor Krasso, buwebdev GitHub
===========================================
*/
function setDefaultTheme()
{
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

function setSelectedTheme() 
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}