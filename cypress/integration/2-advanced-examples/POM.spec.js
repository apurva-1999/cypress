///<reference types="cypress"  />
import LoginPage from '../PageObject/LoginPage'   //under integration page object calss is created so we imported this from there
describe('test',function()    //describes heading for display
{
    it('valid login',function()   //title
    {
      const lp=new LoginPage()  //object created ,reference variable created for loginpage
      lp.visit()  //it will go and call visit method from login page and launch the url
      lp.FillEmail('admin@yourstore.com')  
      lp.Fillpassword('admin')
      lp.submit()
      cy.title().should('be.equal','Dashboard / nopCommerce administration')
    })
})