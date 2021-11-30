///<reference types="cypress"  />
describe('locating elements',function()    //describes heading for display
{
    it('verify types of locators',function()   //title
    {
        cy.visit("https://demo.nopcommerce.com/cart")   //opens url
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")   //locate element on cypress,search the search box
        cy.get("[type='submit']").click()  //click on search button
        cy.get(".product-box-add-to-cart-button").click()
        cy.get("#product_enteredQuantity_4").clear().type('2') //quantity
        cy.get("#add-to-cart-button-4").click() //add to cart button after providing quantity
        cy.wait(5000)
        cy.get("#topcartlink").click() //shoppink cart
        cy.wait(3000)
        cy.get(".product-unit-price").contains('$1,800.00') //validating point
    }
    )
}
)

