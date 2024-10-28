/// <reference types="cypress" />
class PageItems {
    get image() {
        return cy.get('.inventory_details_img')

    }
    get description() {
        return cy.get('.inventory_details_desc')

    }
    get itemName () {
        return cy.get('[data-test="inventory-item-name"]')
    }
    get price () {
        return cy.get('.inventory_details_price')
    }
    clickAddToCartButton() {
       cy.get ('[data-test="add-to-cart"]').click()
    }
}
export default new PageItems();