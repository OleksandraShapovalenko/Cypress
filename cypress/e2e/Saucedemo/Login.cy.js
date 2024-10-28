import Login from "../../support/POM/page/Login"
import Data from "../../fixtures/cred.json"

describe('Login', () => {
    beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    })
  
    it('login', () => {
        Login.login(Data.userNames, Data.passwords)
        cy.contains('Swag Labs')
    })
})