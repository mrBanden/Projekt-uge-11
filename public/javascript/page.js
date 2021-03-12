"use strict";
import {$} from "./modules/nQuery.js";
import {Ajax} from "./modules/Ajax.js";

/*
 * Event handler for button - create ajax object and get data
 */
const getContinents = function(ev) {
    let req = new Ajax();
    req.getFile("/continents", showContinents);
};
const getCountries = function(ev) {
    let req = new Ajax();
    req.getFile(`/countries/${ev.target.value}`, showCountries);
};
const getCities = function(ev) {
    let req = new Ajax();
    req.getFile(`/cities/${ev.target.value}`, showCity);
};
const getCity = function(ev) {
    let req = new Ajax();
    req.getFile(`/city/${ev.target.value}`, showCity);
};

/*
 * callback function for the above AJaX
 */
const showContinents = function(e) {
    /*
     * here you put the ajax response onto your page DOM
     */
    console.log(e.target.getResponseHeader("Content-Type"));
    let element = $("contdata");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    let div = document.createElement("div");
    let h3 = document.createElement('h3');
    let txt = document.createTextNode('The Continents');
    h3.appendChild(txt);
    div.appendChild(h3);
    let continents = JSON.parse(e.target.responseText);
    let sel = document.createElement('select');
    sel.setAttribute('id', 'chooseContinent');
    sel.addEventListener('change', getCountries);
    continents.forEach(function(continent) {
        let opt = document.createElement('option');
        let opttext = document.createTextNode(continent.name);
        opt.appendChild(opttext);
        sel.appendChild(opt);
    });
    div.appendChild(sel);
    $("contdata").appendChild(div);
}

const showCountries = function (e) {
    /*
     * here you put the ajax response onto your page DOM
     */
    console.log(e.target.getResponseHeader("Content-Type"));
    let element = $("countdata");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    let div = document.createElement("div");
    let h3 = document.createElement('h3');
    let txt = document.createTextNode('The Countries');
    h3.appendChild(txt);
    div.appendChild(h3);
    let countries = JSON.parse(e.target.responseText);
    let sel = document.createElement('select');
    sel.setAttribute('id', 'chooseCountry');
    // sel.addEventListener('change', getCountries);
    countries.forEach(function(country) {
        let opt = document.createElement('option');
        let opttext = document.createTextNode(country.name);
        opt.appendChild(opttext);
        sel.appendChild(opt);
    });
    div.appendChild(sel);
    $("countdata").appendChild(div);
};

const showCities = function (e) {
    let element = $("citydata");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    let h3 = document.createElement('h3');
    let txt = document.createTextNode('The Cities');
    h3.appendChild(txt);
    element.appendChild(h3);
    let cities = JSON.parse(e.target.responseText);
    let sel = document.createElement('select');
    sel.setAttribute('id', 'chooseCity');
    sel.addEventListener('change', getCity);
    cities.forEach(function(city) {
        let opt = document.createElement('option');
        let opttext = document.createTextNode(city.name);
        opt.appendChild(opttext);
        sel.appendChild(opt);
    });
    element.appendChild(sel);
};

const showCity = function (e) {
    /*
     * here you put the ajax response onto your page DOM
     */
    let element = $("city");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    let city = JSON.parse(e.target.responseText)[0];    // response is array

    let h3 = document.createElement('h3');
    let txt = document.createTextNode(city.name);
    h3.appendChild(txt);
    element.appendChild(h3);

    let p = document.createElement('p');
    txt = document.createTextNode(`District: ${city.district}, population: ${city.population}`);
    p.appendChild(txt);
    element.appendChild(p);

    p = document.createElement('p');
    p.setAttribute('id', 'weather');
    element.appendChild(p);
    getWeather(city.name);
};

/*
 *  Listen to the get films button
 */
const showStarter = function () {
    if ($('gcont'))
    $('gcont').addEventListener('click', getContinents);
}

window.addEventListener("load", showStarter); 