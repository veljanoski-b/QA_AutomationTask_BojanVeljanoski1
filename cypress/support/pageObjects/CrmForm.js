class CrmForm {

    getYourQuestion() {
        return cy.get('#guideContainer-rootPanel-yourquestion___widget')
    }

    getFirstName() {
        return cy.get('#guideContainer-rootPanel-firstname___widget')

    }
    getLastName() {
        return cy.get('#guideContainer-rootPanel-lastname___widget')
    }

    getEmail() {
        return cy.get('#guideContainer-rootPanel-emailaddress___widget')
    }

    getPhoneNumber() {
        return cy.get('#guideContainer-rootPanel-phonenumber___widget')
    }

    getCompany() {
        return cy.get('#guideContainer-rootPanel-company___widget')
    }

    getJobTitle() {
        return cy.get('#guideContainer-rootPanel-jobtitle___widget')
    }

    getCountry() {
        return cy.get('#guideContainer-rootPanel-country___widget')
    }

    getZipCode() {
        return cy.get('#guideContainer-rootPanel-guidenumericbox___widget')
    }

    getPromoButton() {
        return cy.get('#guideContainer-rootPanel-contactfuture__-1_widget')
    }

    getAgreeToTerms() {
        return cy.get('#guideContainer-rootPanel-submit___widget')
    }

    getSubmitForm() {
        return cy.get('#guideContainer-rootPanel-submit___widget')
    }


}

export default CrmForm;
