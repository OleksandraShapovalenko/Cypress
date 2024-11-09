
/// <reference types="cypress" />
class Login {
    get username() {
        return cy.get('#user-name')

    }
    get password() {
        return cy.get('#password')

    }
    get loginButton() {
        return cy.get('#login-button')

    }
    get error () {
        return cy.get('[data-test="error"]')
    }
    login (username, password) {
        this.username.type(username);
        this.password.type(password)
        this.loginButton.click()
    }
    verifyText(text) {
        this.error.should('have.text', text);
    }
}
export default new Login();