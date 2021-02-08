// ==UserScript==
// @name        Napraw TVP
// @match       https://tvp.info/
// @grant       none
// @version     1.0
// @author      Jakub Sońta
// @description Programiści TVP "przypadkowo" ukryli przeprosiny - naprawiliśmy to za nich!
// ==/UserScript==
document.getElementsByClassName("przeprosiny")[0].scrollIntoView();
document.querySelector(".przeprosiny").style.backgroundColor = "#FF0000";
document.getElementById('scrollTarget').id = "Bardzo_was_przepraszamy";
