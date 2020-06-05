/// <reference types="cypress" />
describe('page', () => {
  context('have.value', function() {
    it('succeeds when checking value of input element', () => {
      cy.visit('index.html')

      cy
        .get('#textInput')
        .should('have.value', 50)
        .should('have.value', '50');

      cy
        .get('#numInput')
        .should('have.value', 50)
        .should('have.value', '50');

        cy
        .get('#rangeInput')
        .should('have.value', 50)
        .should('have.value', '50');

    });

    it('fails on check of progress element value with expected value a Number', () => {
      cy.visit('index.html')

      cy
        .get('#progressEl')
        .should('have.value', 50);
    });

    it('fails on check of progress element value with expected value a String', () => {
      cy.visit('index.html')

      cy
        .get('#progressEl')
        .should('have.value', '50');
    });


    it('fails on check of meter element value with expected value a Number', () => {
      cy.visit('index.html')

      cy
        .get('#meterEl')
        .should('have.value', 50);
    });

    it('fails on check of meter element value with expected value a String', () => {
      cy.visit('index.html')

      cy
        .get('#meterEl')
        .should('have.value', '50');
    });
  });

  context('have.attr', function() {
    it('succeeds on check of progress element value using `have.attr`', () => {
      cy.visit('index.html')

      cy
        .get('#progressEl')
        .should('have.attr', 'value', '50')
        .should('have.attr', 'value', 50);
    });

    it('succeeds on check of meter element value using `have.attr`', () => {
      cy.visit('index.html')

      cy
        .get('#meterEl')
        .should('have.attr', 'value', '50')
        .should('have.attr', 'value', 50);
    });
  });
});
