///<reference types="cypress"  />
describe('Navigation',function()    //describes heading for display
{
    it('NAVIGATION',function()   //title
    {
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
        cy.get('.ico-register').click()
        cy.title().should('eq','nopCommerce demo store. Register')
        cy.go('back')
        cy.title().should('eq','nopCommerce demo store')
        cy.go('forward')
        cy.title().should('eq','nopCommerce demo store. Register')
        cy.reload

        
    }
    )
}
)