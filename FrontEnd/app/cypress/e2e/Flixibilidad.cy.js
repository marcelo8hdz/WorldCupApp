/// <reference types="cypress" />

context('Viewport', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })