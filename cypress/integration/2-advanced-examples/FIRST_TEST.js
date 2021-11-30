describe('MyTestSuite', function() 
 {
    it('Verify Title Of The Page-positive', function() 
    
    {
     cy.visit('https://www.nopcommerce.com/en/demo')
     cy.title().should('eq','Store Demo - nopCommerce')
     
    })
    it('Verify Title Of The Page-negative', function() 
    
    {
     cy.visit('https://www.nopcommerce.com/en/demo')
     cy.title().should('eq','Store Demo - nop Commerce')
    })
  })