/// <reference types="cypress" />

describe('My First Test', () => {

    before(function () {
        cy.fixture('example').then(function (data) {
          this.data = data
        })
      })
    it('Verify the title page', function() {
     cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html')
     cy.get('summary').click()
    
    
    const string =JSON.stringify(this.data)
     
    
     cy.get('textarea#jsondata').click().clear().type(string,{ parseSpecialCharSequences: false })
     
     cy.get('#refreshtable').click()
     
    //  console.log(key)
    //     cy.log(key[0])
        //var i
        
            //var selector = '#dynamictable>tr>td:nth-child('+(i).toString()+')'
            cy.get('#dynamictable>tr>td:nth-child(1)').each((el,index)=>{
           
               expect(el.text()).to.equal(this.data[index].name)
            
            })
        
    cy.get('#dynamictable>tr>td:nth-child(2)').each((el,index,$list)=>{
           
        expect(el.text()).to.equal((this.data[index].age).toString())
   
})
cy.get('#dynamictable>tr>td:nth-child(3)').each((el,index,$list)=>{
           
    expect(el.text()).to.equal(this.data[index].sex)

})
//}

    })
})