const { Selector, t } = require('testcafe');
import { ClientFunction } from 'testcafe';
import LoginPage from '../Pages/LoginPage';
import NavBar from '../Component/NavBar';
import MyBookings from '../Pages/MyBookings';
import OutboundBooking from '../Pages/OutboundBooking'
import TestData from '../TestData';

const loginpage = new LoginPage()
const navbar = new NavBar()
const mybookings = new MyBookings()
const outboundbooking = new OutboundBooking()

const BookingReference = "DFP164826683"
const Email = "qatesting@directferries.com"
const VehicleModel = "Abarth 500"
const LeadPassenger = "TestOne TestRD"
const SecondPassenger = "TestTwo TestRD"
const NumberofOutboundPassengers = "2"
const NumberofOutboundVehicles = "1"
const NumberofReturningPassengers = "1"
const NumberofReturningVehicles = "1"

module.exports = { 

    

    FullScreen: async function () {
        await t.maximizeWindow();
    },

    onHomepage: async function () {
        await t
        .navigateTo('https://www.directferries.com')
    },

    onMyAccountpage: async function () {
        await t
        .navigateTo('https://account.directferries.com/?culture=en-GB')
    },

    toSpecialOffers: async function () {
        await t
            .click(navbar.SpecialOffersBtn);
    },

    toOutboundSailingDetailspage: async function () {
        await t.click(mybookings.OutboundSailingDetailsBtn)
    },
//
    Login: async function () {   
    await t.typeText(loginpage.EmailInput, Email),
    await t.typeText(loginpage.BookingRef, BookingReference),
    await t.click(loginpage.ManageBookinBtn)
    },
    

    VehicleMakeModel: async function() {
        await t.expect(outboundbooking.VehicleDetails.innerText).contains(VehicleModel)
    },

    PassengersDetail: async function () {
        await t.expect(outboundbooking.LeadPassengerDetail.innerText).eql(LeadPassenger)
        await t.expect(outboundbooking.SecondPassengerDetail.innerText).eql(SecondPassenger)
    },

    OutboundSailingDetails: async function() {
        await t.expect(mybookings.OutboundPassengersNumber.innerText).eql(NumberofOutboundPassengers)
        await t.expect(mybookings.OutboundVehicleNumber.innerText).eql(NumberofOutboundVehicles)
    },

    ReturnSailingDetails: async function () {
        await t.expect(mybookings.ReturnPassengersNumber.innerText).eql(NumberofReturningPassengers)
        await t.expect(mybookings.ReturnVehicleNumber.innerText).eql(NumberofReturningVehicles)
    },

    ForceClick: ClientFunction((Selector) => 
        {
            document.querySelector(Selector).click()
        }),

    Screenshot: async function () {
        await t 
            .takeScreenshot({fullPage: true})
    },

}
