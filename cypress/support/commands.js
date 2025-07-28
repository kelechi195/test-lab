// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add ('AccountCreationWithMandatoryFieldsInput',()=>{
    cy.get ('#input-firstname') .type ('bolau');
    cy.get ('#input-lastname') .type ('doerp');
    cy.get ('#input-email') .type ('eperov86850@lhory.com');
    cy.get ('#input-telephone') .type ('08012345670');
    cy.get ('#input-password') .type ('Johndoe@182');
    cy.get ('#input-confirm') .type ('Johndoe@182');
    cy.get ("input[value='1'][name='newsletter']") .click();
    cy.get ("input[value='1'][name='agree']") .check();
    cy.get("input[value='Continue']") . click();
    cy.get("div[id='content'] h1") .should ('contain.text','Your Account Has Been Created!');
})