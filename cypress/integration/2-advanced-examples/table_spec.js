///<reference types="cypress"  />
describe('TABLE',function()    //describes heading for display
{
    it('Table',function()   //title
    {
        cy.visit('http://testautomationpractice.blogspot.com/')
        //check value presence anywhere in table
        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible') //it captures the exact location of learn selanium td tells that its in td place in html code

        //checks value present in the exact row and column 
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')
         
        //check iterations(verify book name whouse author is amod)
        cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($e1,index,$list)=> {  //fetching second row and all the columns in it,
            const text=$e1.text()
            if(text.includes("Amod")){   //if text is amod then it will search for book name infront of it or else restart the itration
                cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').eq(index).then(function(bname)
                {
                    const bookName= bname.text()
                    expect(bookName).to.equal("Amod")
                }
                )
    
            }
        })
    


    
    

        



 
    
    
    
    })
}
)


