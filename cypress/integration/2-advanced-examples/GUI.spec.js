///<reference types="cypress"  />




describe('UI Element',function()
{
    it('Verify elements', function()
    {
        cy.visit("http://demo.guru99.com/test/newtours/")>  //visit url
        cy.url().should('include','newtours')  //checks that the url should countain newtours
        cy.get('input[name=userName ]').should('be.visible').should('be.enabled').type("mercury")  //username input field should be there , and the field should be enabled
        cy.get('input[name=password ]').should('be.visible').should('be.enabled').type("mercury")  //password input field should be there , and the field should be enabled
        cy.get('input[name=submit ]').should('be.visible').click()  //signin button
        cy.title().should('eq','Login: Mercury Tours') //title verification
        
        cy.get('input[name-roundtrip]').should('be.visible').should('be.checked')  //radio button selected
        cy.get('input[name-oneway]').should('be.visible').should('not.be.checked').click()  //radio button not selected
        cy.get('input[name-findFlights]').should('be.visible').click() //continue
        cy.title('eq','After flight finder - No Seats Avaialble') //title

    }
    )
}
)