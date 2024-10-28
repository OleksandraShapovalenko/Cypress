/// <reference types="cypress" />

class Inventory {
    get bmMenu() {
        return cy.get('.bm-menu-wrap')

    }
    get cart() {
        return cy.get('.shopping_cart_link')

    }
    get container () {
        return cy.get('.select_container')
    }
    get sortContainer() {
        return cy.get('.product_sort_container')
    }
    get item () {
        return cy.contains('Sauce Labs Backpack')
    }
    clickCartButton() {
        this.cart.click()
    }
    clickItem() {
        this.item.click()
    }
}

export const inventory = new Inventory()
export default inventory;