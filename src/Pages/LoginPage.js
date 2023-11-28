import { Selector, t } from 'testcafe'

class LoginPage {
    constructor(){
        this.EmailInput = Selector('#Email')
        this.BookingRef = Selector('#BookingReference')
        this.ManageBookinBtn = Selector('#manage-booking-button')
    }
}

export default LoginPage