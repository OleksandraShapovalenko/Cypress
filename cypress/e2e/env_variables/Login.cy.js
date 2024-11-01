import Login from "../../support/POM/page/Login"
import Data from "../../fixtures/cred.json"

describe('Login', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('BASE_URL'));
    })
  
    it('login', () => {
        Login.login(Cypress.env('USER_NAME'), Cypress.env('USER_PASSWORD'))
        cy.contains('Swag Labs')
    })
})