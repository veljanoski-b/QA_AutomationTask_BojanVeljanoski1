/// <reference types="cypress" />
import { labelsTopMainMenu, topMenuHelpers } from '../support/designRequirements'
import { isSbreakPoint, isMbreakPoint, isLbreakPoint, isXLbreakPoint } from "../support/utils"

import describeBuilder from "../support/describeBuilder"
import SearchBar from '../support/pageObjects/SearchBar'
import HomePage from '../support/pageObjects/HomePage'


const homePage = new HomePage()
const describeConstructor = new describeBuilder()
const searchBar = new SearchBar()


describe(describeConstructor.env(Object.values) + " " + describeConstructor.size(Object.values) + " " + 'Search', function () {

    beforeEach(() => {

        cy.visit("")

    })

    it('Checks The Sub Navigation Bar Functionality', function () {

        if (isSbreakPoint() || isMbreakPoint()) {
            searchBar.getSearchMobileTablet().click()
            searchBar.getSearchInputField().type('Led')
            searchBar.getSearchClear().click()
        }

        if (isXLbreakPoint() || isLbreakPoint()) {
            searchBar.getSearch().click()
            searchBar.getSearchInputField().type('Led')
            searchBar.getSearchClear().click()
        }

    })
    // CRM FORM - currently not working - can not be tested
    // it('Checks The Functionality of the CRM form', function () {


    //         crmForm.getYourQuestion().type(this.data.question)
    //     crmForm.getFirstName().type(this.data.name)
    //     crmForm.getLastName().type(this.data.surname)
    //     crmForm.getEmail().type(this.data.email)
    //     crmForm.getPhoneNumber().type(this.data.phonenumber)
    //     crmForm.getCompany().type(this.data.company)
    //     crmForm.getJobTitle().type(this.data.job)
    //     crmForm.getZipCode().type(this.data.zipcode)
    //     crmForm.getPromoButton().check().should('be.checked')
    //     crmForm.getAgreeToTerms().check().should('be.checked')
    //     crmForm.getSubmitForm().click()
    // })

})