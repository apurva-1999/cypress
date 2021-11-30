///<reference types="cypress"  />
describe('mytestsuite',function()    //describes heading for display
{
    before(function(){  //runs once before all tests in the block
    
        cy.log('*************this is setup block***********')
    
    })
    after(function(){  //runs once after all tests in the block
        cy.log('*************this is TEAR DOWN (exit criteria)block***********')
    })
    beforeEach(function(){  //runs  before each tests in the block
        cy.log('*************this is login block***********')
    })
    afterEach(function(){  //runs after each tests in the block
        cy.log('*************this is logout block***********')
    })
    it('searching',function()   //title

    {
        cy.log('*************this is searching text***********')
    })
    it('advanced searching',function()   //title

    {
        cy.log('*************this is advanced searching text***********')
    })
    it('listing products',function()   //title

    {
        cy.log('*************this is listing products text***********')
    })
})