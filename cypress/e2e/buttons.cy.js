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

    // find element with class attribute and create a list select 3rd element from the list
    cy.get('.btn.btn-primary').then(($buttons) => {
      // $ for element
      // need to turn jQuery into cypress element/chaining
      cy.wrap($buttons).eq(2).click(); // wrap the buttons into cypress
      // in List Java, list,get(index) // zero indexed list 0,1,2,3
      // assert the text
      cy.contains('Clicked on button three!').should('be.visible');
    });
    // you got all buttons with tagname  // each method is creating a loop
    cy.get('button').each((item, index, list) => {
      // asser lenght of the list, verify number of buttons
      expect(list).to.have.length(6);
      expect(item).to.have.attr('onclick');
    });
    // I will get all buttons like previous approach, get only the item then check for text for each
    // item, if it is equal to Button 4, then click on it
    cy.get('button').each((item) => {
      if (item.text() == 'Button 4') {
        cy.log(item.text()); // this command write teh text at the test console
        // item.click();  // you cannot use cypress click function on jQuery element
        cy.wrap(item).click();
        cy.contains('Clicked on button four!').should('be.visible');
      }
    });
  });
  // npx cypress run --headless -b chrome
});
