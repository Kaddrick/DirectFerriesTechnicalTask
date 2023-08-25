const { Given, When, Then } = require("cucumber");
const interviewExample = require("../methods/interview-example-methods.js");

Given('I am on the homepage', async function () {
    await interviewExample.onHomepage();
});