/// <reference types="cypress" />

describe('Open the link', () => {
    beforeEach(() => {
      cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
    })
    it('GET header buttons', () => {
        cy.get('a.btn.header-link.-active'),
        cy.contains ('button.header-link', 'About'),
        cy.get('button[appscrollto="contactsSection"]'),
        cy.get('.header-link.-guest'),
        cy.contains('.btn', 'Sign In')
      })
    it('GET all links', () => {
        cy.get('a[href*="www.facebook.com"]'),
        cy.get('.contacts_socials').find('.icon-facebook'),
        cy.get('a[href*="t.me"]'),
        cy.get('.contacts_socials').find('.icon-telegram'),
        cy.get('.contacts_socials').find('a[href*="youtube.com"]')
        cy.get('.contacts_socials').find('.icon-youtube'),
        cy.get('.socials_link').eq(3),
        cy.get('.contacts_socials').find('.icon-instagram'),
        cy.get('a[href*="www.linkedin.com"]'),
        cy.get('.contacts_socials').find('.icon-linkedin'),
        cy.get('.display-4'),
        cy.contains('.h4', 'support@ithillel.ua')

    })
})