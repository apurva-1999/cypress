///<reference types="cypress"  />

describe('Suite name',function()    //describes heading for display
{
    it('Hobbies check boxes',function()   //title
    {
        cy.visit("http://demo.automationtesting.in/Register.html")  //visits url
        
        
        
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')  //checks the checkbox1 with class name,it should be checked then it will give assertion,and value should be cricket
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')
        cy.get('#checkbox1').uncheck().should('not.be.checked').and('have.value','Cricket') // unchecks
        cy.get('#checkbox2').uncheck().should('not.be.checked').and('have.value','Movies')
        cy.get('#checkbox3').uncheck().should('not.be.checked').and('have.value','Hockey')
        cy.get('input[type=checkbox]').check(['Cricket','Hockey'])  //checks to hpbbies
    }
    )
    it('Skills drop down',function(){
        cy.get('#Skills').select('Android').should('have.value','Android') //its static dropdown where we can select one thing at a time,selecting one skill and checking whether the one appears on the screen is same as we selected
        
    }
    )
    it('languages',function(){
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()    
        cy.get('.ui-corner-all').contains('Japanese').click()
    }
)
it('country',function(){ 
    cy.get('[role=combobox]').click({force:true})
    cy.get('.select2-search__field').type('India')
    cy.get('.select2-search__field').type('{enter}')
}
)
}
)

        

    

