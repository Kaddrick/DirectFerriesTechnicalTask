Feature: Interview test

     Scenario: Langugage is changed to French
        Given I am on the homepage
        When I navigate to the special offers screen
        When I open the language dropdown
        When I change the language to French
        Then The language the site is translated in the language of my choice

    Scenario: Langugage is changed to Italian
        Given I am on the homepage
        When I navigate to the special offers screen
        When I open the language dropdown
        When I change the language to Italian
        Then The language the site is translated in the language of my choice
    

    Scenario: Booking details are confirmed
        Given I am on My Account page
        When I login
        When passengers and vehicle are correct for my outbound sailing
        When passenger and vehicle are correct for my return sailing
        When I navigate to the outbound sailing detail screen
        When the vehicle is showing correctly
        When the lead passenger and second passenger are correct
        Then all details are correct