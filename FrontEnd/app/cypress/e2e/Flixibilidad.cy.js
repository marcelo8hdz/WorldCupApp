/// <reference types="cypress" />

context('Flaxibilidad', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('cy.viewport() - set the viewport size and dimension', () => {
    cy.viewport(2999, 2999)
    cy.wait(200)
    cy.viewport(3060, 1440)
    cy.wait(200)
    cy.viewport('macbook-15')
    cy.wait(200)
    cy.viewport('macbook-13')
    cy.wait(200)
    cy.viewport('ipad-mini')
    cy.wait(200)
    cy.viewport('iphone-6+')
    cy.wait(200)
    cy.viewport('iphone-6+','landscape')
    cy.wait(200)
    cy.viewport('iphone-6+','portrait')
    cy.wait(200)
    })
})