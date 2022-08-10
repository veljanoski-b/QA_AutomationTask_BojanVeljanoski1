/// <reference types="cypress" />
import { labelsTopMainMenu, topMenuHelpers } from '../support/designRequirements'
import { isSbreakPoint, isMbreakPoint, isLbreakPoint, isXLbreakPoint } from "../support/utils"

import describeBuilder from "../support/describeBuilder"

import HomePage from '../support/pageObjects/HomePage'

const homePage = new HomePage()
const describeConstructor = new describeBuilder()


describe(describeConstructor.env(Object.values) + " " + describeConstructor.size(Object.values) + " " + 'Header', function () {

    beforeEach(() => {

        cy.visit("")

    })
    it('Checks The Header Top Menu UI', function () {

        if (isSbreakPoint() || isMbreakPoint()) {
            homePage.getPhilipsLogo().should('be.visible')
            homePage.getTabletMobileHamburgerMenu().click()
            homePage.getTopMenu().should('have.css', 'background-color', topMenuHelpers.Utilities.topMenuBackgroundColor)
        }

        if (isXLbreakPoint() || isLbreakPoint()) {
            homePage.getPhilipsLogo().should('be.visible')
            homePage.getTopMenu().should('have.css', 'background-color', topMenuHelpers.Utilities.topMenuBackgroundColor)
        }
    })

    it('Checks The Header Top Menu Items["For professionals"]', function () {

        homePage.getTopMenuItems().find('li').then(($li) => {
            cy.wrap($li).find('a').eq(0)
        })
            .should('have.css', 'line-height', labelsTopMainMenu.L.lineHeight)
            .should('have.css', 'font-size', labelsTopMainMenu.L.fontSize)
            .should('have.css', 'font-weight', labelsTopMainMenu.L.fontWeightBold)
            .should('have.css', 'font-family', labelsTopMainMenu.L.font)
            .should('have.css', 'color', labelsTopMainMenu.L.colorText)

    })

    it('Checks The Header Top Menu Items["For consumers"]', function () {

        homePage.getTopMenuItems().find('li').then(($li) => {
            cy.wrap($li).find('a').eq(1)
        })
            .should('have.css', 'line-height', labelsTopMainMenu.L.lineHeight)
            .should('have.css', 'font-size', labelsTopMainMenu.L.fontSize)
            .should('have.css', 'font-weight', labelsTopMainMenu.L.fontWeightNormal)
            .should('have.css', 'font-family', labelsTopMainMenu.L.font)
            .should('have.css', 'color', labelsTopMainMenu.L.colorText)
    })



    it('Checks The Header Top Menu Items["More from us"]', function () {

        homePage.getTopMenuItems().find('li').then(($li) => {
            cy.wrap($li).find('a').eq(1)
        })
            .should('have.css', 'line-height', labelsTopMainMenu.L.lineHeight)
            .should('have.css', 'font-size', labelsTopMainMenu.L.fontSize)
            .should('have.css', 'font-weight', labelsTopMainMenu.L.fontWeightNormal)
            .should('have.css', 'font-family', labelsTopMainMenu.L.font)
            .should('have.css', 'color', labelsTopMainMenu.L.colorText)

    })

    it('Checks The Header Main Menu UI', function () {

        homePage.getMainMenu().should('have.css', 'background-color', 'rgb(0, 116, 224)')
            .find('li').then(($li) => {
                cy.wrap($li).find('span').eq(0)
            })
            .should('have.css', 'height', labelsTopMainMenu.L.height)

    })

    it('Clicks on Application Areas & Drop-Down-Meny [UI Check] Public-Spaces', function () {

        homePage.getPhilipsLogo().should('be.visible')
        homePage.getMainMenu().find('.user-nav__list').then(($items) => {
            cy.wrap($items).eq(1).click()
        })
        homePage.getFooter().should('be.visible')

    })

    it('Checks The Header Main Menu - "Products" ', function () {

        homePage.getMainMenu().find('li').then(($li) => {
            cy.wrap($li).find('span').eq(0).click()
        })
            .should('have.css', 'line-height', labelsTopMainMenu.L.lineHeight)
            .should('have.css', 'font-size', labelsTopMainMenu.L.fontSize)
            .should('have.css', 'font-weight', labelsTopMainMenu.L.fontWeightNormal)
            .should('have.css', 'font-family', labelsTopMainMenu.L.font)
            .should('have.css', 'color', labelsTopMainMenu.L.colorText)

    })

    it('Clicks on Products & Drop-Down-Menu [UI Check]Outdoor Luminaires', function () {

        homePage.getMainMenu().find('li').then(($li) => {
            cy.wrap($li).find('span').eq(0).click()
        })

        homePage.getMainMenuItems().find('li').then(($li) => {
            cy.wrap($li).find('span').eq(1).click()
            //bugs-current-22px/16px/700
            //  .should('have.css', 'line-height', '30px')
            // .should('have.css', 'font-size', '22px')
            // .should('have.css', 'font-weight', '400')
            //bug should be color: rgba(23, 23, 23, 1);
            //.should('have.css', 'color', 'rgb(0, 0, 0)')
        })

    })

    it('Clicks on Products & Drop-Down-Menu [UI Check] LED Lamps and Tubes', function () {

        homePage.getMainMenu().find('li').then(($li) => {
            cy.wrap($li).find('span').eq(0).click()
        })

        homePage.getMainMenuItems().find('li').then(($li) => {
            cy.wrap($li).find('span').eq(2)

                .should('have.css', 'line-height', labelsTopMainMenu.L.lineHeight)
                .should('have.css', 'font-size', labelsTopMainMenu.L.fontSize)
                .should('have.css', 'font-weight', labelsTopMainMenu.L.fontWeightNormal)
        })

    })

})


