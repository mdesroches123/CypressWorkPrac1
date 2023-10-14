/// <reference types="cypress" />

describe('Context: My First Tests', () => {
    // like main method
    beforeEach(() => {
      cy.clearCookies();
      cy.visit('/multiple_buttons');
    });
    it('Check Different Button Actions', () => {
        // select a button with text
        cy.contains('Button 2').should('be.visible').click(); // to see if visible by chaining
        cy.contains('Clicked on button two!').should('be.visible');
});
});