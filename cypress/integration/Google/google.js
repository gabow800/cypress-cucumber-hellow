import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com';
Given('I open Google page', () => {
  cy.visit(url)
})

Given(`I search for {string}`, (query) => {
  cy.get(`input[name=q]`)
    .type(query)
  cy.get('form[action="/search"]').submit()
})

Then(`I see {string} results`, (query) => {
  cy.get('#search').children().should("have.length.greaterThan", 0)
  cy.pause()
})
