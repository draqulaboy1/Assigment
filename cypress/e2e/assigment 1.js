/// <reference types="cypress" />
describe('My First Test', () => {


    it('Verify the title page', () => {
     cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html')
     cy.get('summary').click()
     const s =   [{"name" : "Bob", "age" : 20, "sex": "Male"},
     {"name": "George", "age" : 42, "sex": "Male"},
     {"name" : "Phil", "age" : 20, "sex": "Male"}, 
     {"name": "John", "age" : 35, "sex": "Female"},
     {"name" : "Jonathan", "age" : 25, "sex": "Female"}, 
     {"name": "Sandra", "age" : 23, "sex": "Female"},
     {"name" : "Jennifer", "age" : 20, "sex": "Male"},
     {"name" : "Jessica", "age" : 20, "sex": "Male"},
     {"name" : "Sara", "age" : 20, "sex": "Male"}]  
     
     const string = JSON.stringify(s)
     
    
     cy.log(s[0]["name"])
     cy.get('textarea#jsondata').click().clear().type(string, { parseSpecialCharSequences: false })
     
     cy.get('#refreshtable').click()
    //  const a = cy.get('#dynamictable>tr>td').eq(0)
    //  cy.log(a)
    //  cy.get('#dynamictable > :nth-child(3) > :nth-child(1)').each((li, index, $list)=>{
    //     expect(li.text()).to.equal(s[0]["name"])
    //  })
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