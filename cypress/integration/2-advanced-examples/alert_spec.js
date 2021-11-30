///<reference types="cypress"  />

describe('Suite name',function()    //describes heading for display
{
    it('alert',function()   //title
    {
        cy.visit("https://mypage.rediff.com/login/dologin")
        cy.get('input[value=Login]').click()
        cy.on('window:alert',(str) =>  //to capyure whats written in alert window (raise an event) when this window would have been confirmation window then we would have used 'window:confirm'
        {
            expect(str).to.equal('Please enter valid email')
        }
        )

    }
    )
}
)