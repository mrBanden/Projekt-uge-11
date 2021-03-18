"use strict";
import {$} from ".modules/nQuery.js";

const loans = require('../models/Loan');

function showStarter () {
let loanme = document.getElementById("loanme");
loanme.addEventListener("click", postLoans);
}



window.addEventListener("load", showStarter);  