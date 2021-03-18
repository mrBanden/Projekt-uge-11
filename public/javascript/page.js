"use strict";
import {$} from "./nQuery.js";
import {Ajax} from "./Ajax.js";

// const loans = require('../models/Loan');

const postloans = function(ev) {
    let req = new Ajax();
    req.getFile(`/Loan/${ev.target.value}`, postLoans);

const showStarter = function () {
    if ($('loanme'))
    $('loanme').addEventListener('click', postloans);
}

window.addEventListener("load", showStarter);

// function showStarter () {
// let loanme = document.getElementById("loanme");
// loanme.addEventListener("click", postLoans);
// }



// window.addEventListener("load", showStarter);  