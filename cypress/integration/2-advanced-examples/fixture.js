///<reference types="cypress"  />

describe('Suite name',function()    //describes heading for display
{
    before(function(){ //always we need access fixture file to access useename and password ,for each time we used before hook 
        cy.fixture('example').then(function(data){ //we created variable data which is accesseble inside this block only
            this.data=data //therefore we created this data class to access outside class
        })
    
    })

    it('demo',function()   //title
    {
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.get('#Email').clear().type(this.data.email) //email which we can access from fixture file
        cy.get('#Password').clear(). type(this.data.password)  //password which we can access from fixture file
        cy.get('.login-button').click() //signin

    })
})