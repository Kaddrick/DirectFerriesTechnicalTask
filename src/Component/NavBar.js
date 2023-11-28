import { Selector, t } from 'testcafe'

class NavBar {
    constructor(){
        this.SpecialOffersBtn = Selector('#specialOffers')
        this.languagedropdown = ('a.nav-icon.flag.df-desktop-only')
        this.ItalianFlag = ('.it-IT')
        this.FrenchFlag = ('.fr-FR')
    }
}

export default NavBar