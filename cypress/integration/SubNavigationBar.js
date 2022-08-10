/// <reference types="cypress" />
import { labelsTopMainMenu, topMenuHelpers } from '../support/designRequirements'
import { isSbreakPoint, isMbreakPoint, isLbreakPoint, isXLbreakPoint } from "../support/utils"

import describeBuilder from "../support/describeBuilder"
import SubNavigationBar from '../support/pageObjects/SubNavigationBar'
import HomePage from '../support/pageObjects/HomePage'

const homePage = new HomePage()
const describeConstructor = new describeBuilder()
const subNavigationBar = new SubNavigationBar()


describe(describeConstructor.env(Object.values) + " " + describeConstructor.size(Object.values) + " " + 'Sub-Navigation-Bar', function () {

    beforeEach(() => {

        cy.visit("" + "/en-aa-sample/editorial/navigation-components/sub-navigation-bar-component")

    })

    it('Checks The Sub Navigation Bar Functionality [Anchor-Link]', function () {

        if (isSbreakPoint() || isMbreakPoint()) {
            subNavigationBar.getSubNavigationBar().eq(0).click()
        }

        if (isXLbreakPoint() || isLbreakPoint()) {
            subNavigationBar.getSubNavigationBar().eq(0).click()
        }

    })

    it('Checks The Sub Navigation Bar Functionality [Internal-Link]', function () {

        if (isSbreakPoint() || isMbreakPoint()) {
            subNavigationBar.getSubNavigationBar().eq(1).click()
        }

        if (isXLbreakPoint() || isLbreakPoint()) {
            subNavigationBar.getSubNavigationBar().eq(1).click()
        }

    })

    it('Checks The Sub Navigation Bar Functionality [External-Link]', function () {

        if (isSbreakPoint() || isMbreakPoint()) {
            subNavigationBar.getSubNavigationBar().eq(2).click()
        }

        if (isXLbreakPoint() || isLbreakPoint()) {
            subNavigationBar.getSubNavigationBar().eq(2).click()
        }


    })

})