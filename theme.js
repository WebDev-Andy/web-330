/*
===========================================
; File: theme.js
; Author: Andrew Britt
; Date: 28 May 2022
; Description: JavaScript code for theme files web-330
; Reference: Professor Krasso, buwebdev GitHub
===========================================
*/
function toggleMode(x)
{
    let colorTheme = document.body.classList;
    let iconMode = x.classList;

    if (colorTheme.value === "light-theme")
    {
        localStorage.clear();
        localStorage.setItem("mode", "dark-theme");
        localStorage.setItem("iconMode", "fa-toggle-on");
        localStorage.setItem("iconText", "Dark Mode");
    }

    else
    {
       localStorage.clear();
        localStorage.setItem("mode", "light-theme");
        localStorage.setItem("iconMode", "fa-toggle-off");
        localStorage.setItem("iconText", "Light Mode");
    }

    colorTheme.value = localStorage.getItem("mode");
    iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`;
    document.getElementById("icon-text").innerHTML = localStorage.getItem("iconText")
}

function clearLocalStorage() {
   localStorage.clear();
   document.body.classList.value = "light-theme";
   document.getElementById("icon-text").innerHTML = "Light Mode";
   document.getElementById("icon-mode").classList.value = "fa fa-toggle-off pull-right";
}


function setDefaultTheme()
{
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

function setSelectedTheme() 
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}