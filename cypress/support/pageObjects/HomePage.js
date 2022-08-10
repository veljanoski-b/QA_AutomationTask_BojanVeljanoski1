class HomePage {

    getPhilipsLogo() {
        return cy.get('.header__logo-img')
    }

    getTopMenu() {
        return cy.get('.header__top-container')
    }

    getTopMenuItems() {
        return cy.get('.header__top-container-items')
    }


    getMainMenu() {
        return cy.get('.user-nav__wrapper')
    }

    getMainMenuItems() {
        return cy.get('.flyout__items')
    }


    getFooter() {
        return cy.get('.footer__logo-wrapper')
    }

    getIndoorLuminaires() {
        return cy.get('span[class="flyout__items-list--link flyout__items-list--link-1144634899"]')
    }

    getOutdoorLuminaires() {
        return cy.get('span[class="flyout__items-list--link flyout__items-list--link-263958294"]')
    }

    //Tablet and Mobile Screen

    getTabletMobileHamburgerMenu() {
        return cy.get('.header__top-container--icons-hamburger')
    }

    getTabletMobileSubMenuItems() {
        return cy.get('.mobile-menu__items')
    }

}

export default HomePage;
