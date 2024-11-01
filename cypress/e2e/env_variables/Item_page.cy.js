/// <reference types="cypress" />
import inventory from "../../support/POM/page/Inventory";
import Login from "../../support/POM/page/Login";
import Data from "../../fixtures/cred.json"
import Items from "../../support/POM/page/Items";
describe("Inventory page", () => {
  beforeEach(() => {
    cy.visit(Cypress.env('BASE_URL'));
    Login.login(Cypress.env('USER_NAME'), Cypress.env('USER_PASSWORD'));
    inventory.clickItem()
  });
  it("should contain elements", () => {
    expect(Items.image).to.be.not.undefined
    expect(Items.description).to.be.not.undefined
    expect(Items.itemName).to.be.not.undefined
    expect(Items.price).to.be.not.undefined
  });

  it("Remove button display", () => {
    Items.clickAddToCartButton(),
    cy.get('[data-test="remove"]').should('be.visible')
    cy.get('[data-test="remove"]').click()
    cy.get('[data-test="add-to-cart"]').should('be.visible')
  });
});