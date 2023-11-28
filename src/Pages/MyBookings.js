import { Selector, t } from 'testcafe'

class MyBookings {
    constructor(){
        
        this.OutboundPassengersNumber = Selector('div[id=\'outbound-details\'] li:nth-child(1) span[class=\'df-ticket-specifics-total\']')
        this.OutboundVehicleNumber = Selector('div[id=\'outbound-details\'] li:nth-child(2) span[class=\'df-ticket-specifics-total\']')
        this.ReturnPassengersNumber = Selector('div[id=\'return-details\'] li:nth-child(1) span[class=\'df-ticket-specifics-total\']')
        this.ReturnVehicleNumber = Selector('div[id=\'return-details\'] li:nth-child(2) span[class=\'df-ticket-specifics-total\']')
        this.OutboundSailingDetailsBtn = Selector('.btn[data-qa=\'outbound-view-booking\']')
    }
}

export default MyBookings