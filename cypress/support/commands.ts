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


// Extend Cypress interface to include custom commands
// cypress/support/commands.ts

// Import Cypress types
// cypress/support/commands.ts

// Extend the Cypress namespace to include custom commands
// cypress/support/commands.ts

// cypress/support/commands.ts

// Augmenting the Cypress namespace to include the custom command

 // Import Cypress types
// cypress/support/commands.ts

// Import the Cypress type definitions  
  // Define the custom command
// cypress/support/commands.ts

// cypress/support/commands.ts

/// <reference types="cypress" />

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('');

  cy.get('#input-email').type(email);
  cy.get('#input-password').type(password);
  cy.get('input[value="Login"]').click();

});

   