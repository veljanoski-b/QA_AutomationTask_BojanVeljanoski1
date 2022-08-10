class SearchBar {

    getSearch() {
        return cy.get('.search__input')
    }

    getSearchMobileTablet() {
        return cy.get('.header__top-container--icons-search')
    }

    getSearchInputField() {
        return cy.get('.search-suggestions__input')
    }

    getSearchClear() {
        return cy.get('[class="icon-close icon icon-close icon--md"]')
    }

    // Mobile and Tablet

    getSearchTabletMobile() {
        return cy.get('[class="icon icon-search "]')
    }


}

export default SearchBar;
