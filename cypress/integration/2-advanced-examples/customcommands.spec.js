///<reference types="cypress"  />

describe('Suite name',function()    //describes heading for display
{
   
    it('login',function()   //title
    {
       cy.login('admin@yourstore.com','admin')  //customized command
       cy.title().should('be.equal','Your store. Login')
     
    })
    it('add',function()   //title
    {
        cy.login('admin@yourstore.com','admin')  //customized command
     
    })
    it('edit',function()   //title
    {
        cy.login('admin@yourstore.com','admin')  //customized command
     
    })
})
    
