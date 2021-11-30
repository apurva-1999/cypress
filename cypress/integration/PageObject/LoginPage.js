//in this we will create page object class
/// <reference types="cypress" /> 
class LoginPage
{
    visit(){   //methid created
        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
         
    }
    FillEmail(value) //method action method
    {
    const field=cy.get('[id=Email]') //to get element we save element in variable field,attribute
    field.clear()  //when we get element in field we clear it before entering data
    field.type(value) //to type value we used type and what value we will enter we used cvalue becayse we gave value a method
    return this //return the value typed

}
Fillpassword(value) //method
    {
    const field=cy.get('[id=Password]') //to get element we save element in variable field,attribute
    field.clear()  //when we get element in field we clear it before entering data
    field.type(value) //to type value we used type and what value we will enter we used cvalue becayse we gave value a method
    return this //return the value typed

}
submit()
{
const button=cy.get('[type=submit')  //to get element we save it in const button
button.click()
}

}
export default LoginPage  //every test case should be able to access this loginpage