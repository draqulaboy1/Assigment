/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
describe('My First Test', () => {

    before(function () {
        cy.fixture('example').then(function (data) {
          this.data = data
        })
      })
    it('Verify the title page', function() {
     cy.visit('https://testpages.herokuapp.com/styled/html5-form-test.html')
     cy.get('#colour-picker').click()
     
     const randomEmail = faker.internet.email();

     cy.get("#email-field").clear().type(randomEmail)
     
cy.get("#email-field").should('have.value',randomEmail)

cy.get("#number-field").clear().type("400")
     
cy.get("#number-field").should('have.value','400')

cy.get("#date-picker").clear().type("1999-12-31")
     
cy.get("#date-picker").should('have.value','1999-12-31')
cy.get("#month-field").clear().type("2023-05")
     
cy.get("#month-field").should('have.value',"2023-05")
cy.get("#date-time-picker").clear().type("2017-06-01T08:30")
     
cy.get("#date-time-picker").should('have.value',"2017-06-01T08:30")

    })
})