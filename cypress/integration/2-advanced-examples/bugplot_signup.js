///<reference types="cypress"  />

describe('UI Element',function()
{
    it('verify signup with valid username and password', function()
    {
        cy.visit('https://dev.bugplot.com/signin')
        cy.get('[type=email]').should('be.visible')
        cy.get('[type=password]').should('be.visible')
        cy.contains('Sign up').click()
        cy.get('[type=firstName]').type("abc")
        cy.get('[type=lastName]').type("abc")
        cy.get('[type=email]').type("apurva.smriti@crownstack.com")
        cy.get('[type=text]').type("XYZ")
        cy.get('[name=password]').type("xyz123456")
        cy.get('[name=cnfpassword]').type("xyz123456")
        cy.get('[type=checkbox]').check().should('be.checked')
        cy.get('#sign-up').click()




    })
    
    it('verify signup by entering numeric digits in firstname field', function()
    {
        cy.visit('https://dev.bugplot.com/signin')
        cy.get('[type=email]').should('be.visible')
        cy.get('[type=password]').should('be.visible')
        cy.contains('Sign up').click()
        cy.get('[type=firstName]').type("123")
        cy.get('[type=lastName]').type("abc")
        cy.get('[type=email]').type("apurva.smriti@crownstack.com")
        cy.get('[type=text]').type("XYZ")
        cy.get('[name=password]').type("xyz1")
        cy.get('[name=cnfpassword]').type("xyz1")
        cy.get('[type=checkbox]').check().should('be.checked')
        cy.get('#sign-up').click()




    })
    it('verify signup by keeping lastname feild as empty', function()
    {
        cy.visit('https://dev.bugplot.com/signin')
        cy.get('[type=email]').should('be.visible')
        cy.get('[type=password]').should('be.visible')
        cy.contains('Sign up').click()
        cy.get('[type=firstName]').type("abc")
        cy.get('[type=lastName]').should('not.be','eq','abc')
        cy.get('[type=email]').type("apurva.smriti@crownstack.com")
        cy.get('[type=text]').type("XYZ")
        cy.get('[name=password]').type("xyz1")
        cy.get('[name=cnfpassword]').type("xyz1")
        cy.get('[type=checkbox]').check().should('be.checked')
        cy.get('#sign-up').click()




    })
    
})