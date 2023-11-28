import { Selector, t } from 'testcafe'

class OutboundBooking {
    constructor(){
        this.VehicleDetails = Selector('div[data-qa=\'vehicle-make-model\'] div[class=\'box\'] div[class=\'information\'] div[class=\'specifics \'] div[class=\'detail\']')
        this.LeadPassengerDetail = Selector('div[data-qa=\'passenger1-details\'] div[class=\'box\'] div[class=\'information\'] div[class=\'specifics \'] div[class=\'detail\']')
        this.SecondPassengerDetail = Selector('div[data-qa=\'passenger2-details\'] div[class=\'box\'] div[class=\'information\'] div[class=\'specifics \'] div[class=\'detail\']')
       
    }
}

export default OutboundBooking