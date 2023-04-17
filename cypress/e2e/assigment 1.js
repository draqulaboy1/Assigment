/// <reference types="cypress" />

describe('My First Test', () => {

    it('Verify the title page', function() {
     cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html')
     cy.get('summary').click()
    let string
     cy.fixture('example').then((data)=>{
         string =JSON.stringify(data.jsonData)
         cy.get('textarea#jsondata').click().clear().type(string,{ parseSpecialCharSequences: false })
         

             cy.get('#refreshtable').click()

              cy.get('#dynamictable>tr').each((el,index1)=>{
            if(index1<=8){
           el=el.next()
            console.log(index1)
            console.log()
                cy.wrap(el).within(()=>{
                    
                     cy.get('td').each((e2,index)=>{
                
               var key1 = data.jsonData[index1]
               let obj = Object.keys(key1)
               let element = obj[index]

                    if(index=1){
                        expect(e2.text()).to.equal(data.jsonData[index1][element].toString())
                    }  
                    else{ 
                        cy.log(index1)              
               expect(e2.text()).to.equal(data.jsonData[index1][element])}
                                    
                                  
                })
            })
            
       }
      
        })
     })

 

    })
})