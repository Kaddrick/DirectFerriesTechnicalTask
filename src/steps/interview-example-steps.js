// const { Given, When, Then } = require("cucumber");
import { Given, When, Then } from "@cucumber/cucumber";
const TechnicalTask = require("../methods/TechnicalTask.js");
import NavBar from "../Component/NavBar.js";

const navbar = new NavBar()


Given('I am on the homepage', async function () {
    await TechnicalTask.onHomepage();
    await TechnicalTask.FullScreen();
});

Given('I am on My Account page', async function(){
    await TechnicalTask.onMyAccountpage();
    await TechnicalTask.FullScreen();
})

When('I navigate to the special offers screen', async function() {
    await TechnicalTask.toSpecialOffers();
});

When ('I open the language dropdown', async function (){
    await TechnicalTask.ForceClick(navbar.languagedropdown);
})

When('I change the language to French', async function() {
    
    await TechnicalTask.ForceClick(navbar.FrenchFlag)
});

When('I change the language to Italian', async function() {
   
    await TechnicalTask.ForceClick(navbar.ItalianFlag)
});

When('I login', async function() {
    await TechnicalTask.Login();
});

When ('passengers and vehicle are correct for my outbound sailing', async function() {
    await TechnicalTask.OutboundSailingDetails();
});

When ('passenger and vehicle are correct for my return sailing', async function() {
    await  TechnicalTask.ReturnSailingDetails();
});

When ('I navigate to the outbound sailing detail screen', async function(){
    await TechnicalTask.toOutboundSailingDetailspage();
});

When ('the vehicle is showing correctly', async function() {
    await TechnicalTask.VehicleMakeModel();
});

When ('the lead passenger and second passenger are correct', async function () {
    await TechnicalTask.PassengersDetail();
});

Then('The language the site is translated in the language of my choice', async function() {

    await TechnicalTask.Screenshot();
});

Then ('all details are correct', async function () {
    await TechnicalTask.Screenshot();
})
