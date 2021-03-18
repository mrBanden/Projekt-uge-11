"use strict";
import {$} from ".modules/nQuery.js";

const loans = require('../models/Loan');

function showStarter () {
console.log("you found me!");
let loanme = $("loanme");
loanme.addEventListener("click", postLoans);

}



window.addEventListener("load", showStarter);  