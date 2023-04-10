/// <reference types="cypress" />
describe('My First Test', () => {


    it('Verify the title page', () => {
     cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html')
     cy.get('summary').click()
     const s =   Cypress.env('json')
     const string = JSON.stringify(s)
     
    
     cy.get('textarea#jsondata').click().clear().type(string, { parseSpecialCharSequences: false })
     
     cy.get('#refreshtable').click()

    var i;
    for(i=0;i<=8;i++){
    
        cy.get('#dynamictable>tr>td').eq(i*3).should('contain',s[i]["name"])
    }
    
    for(i=0;i<=8;i++){
    
        cy.get('#dynamictable>tr>td').eq(2*i+1*(i+1)).should('contain',s[i]["age"])
    }

    for(i=0;i<=8;i++){
       
            cy.get('#dynamictable>tr>td').eq(i*2+1*(i+2)).should('contain',s[i]["sex"])
        }
            







    })
})