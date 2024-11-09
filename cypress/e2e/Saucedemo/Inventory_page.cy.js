/// <reference types="cypress" />
import inventory from "../../support/POM/page/Inventory";
import Login from "../../support/POM/page/Login";
import Data from "../../fixtures/cred.json"
describe("Inventory page", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    Login.login(Data.userNames, Data.passwords);
  });
  it("should contain UI elements", () => {
    expect(inventory.bmMenu).to.be.not.undefined
    expect(inventory.cart).to.be.not.undefined
    expect(inventory.container).to.be.not.undefined
    inventory.sortContainer.find('option').should('have.length', 4);
  });
  it("redirect to the cart", () => {
    inventory.clickCartButton(),
      cy.url().should("eq", "https://www.saucedemo.com/cart.html");
  });
  it("redirect to Item Page", () => {
    inventory.clickItem();
    cy.url().should("eq", "https://www.saucedemo.com/inventory-item.html?id=4");
  });
});
