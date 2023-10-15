/// <reference types="cypress" />

describe('Input Forms Tests', () => {
    beforeEach('Navigate to registration page', () => {
      cy.clearCookies();
      cy.visit('/registration_form');
    });
    it('Check different input box fields and verify', () => {
        // fill the form for username and other info
        cy.get('input[name="firstname"]').type('Marie');  
        cy.get('input[name="lastname"]').type('Des');  
        cy.get('input[name="username"]').type('mariedes');  
        /**
     * Math.random(): creates a number between 0 - 1 ~ 0.005678
     * Math.floor : makes it a whole number
     *  */
       // let email = `formtest${Math.floor(100000+Math.random()*900000)}@cydeo.com`;
        let email = `formtest${Math.floor(100000+Math.random()*900000)}@cydeo.com`;
        cy.get('input[name="email"]').type(email);
        let password = `test${Math.floor(100000+Math.random()*900000)}`;
        cy.get('input[name="password"]').type(password);
        let phoneNumber = `555-000-${Math.floor(1000+Math.random()*9000)}`; // 4 digit extension number
        cy.get('input[name="phone"]').type(phoneNumber);
        cy.get('input[name="birthday"]').type('01/01/1999');
        //cy.get('input[name="email"]').type('mariedes@fake.com');  
    });
});