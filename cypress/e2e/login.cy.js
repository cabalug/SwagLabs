describe('Login', () => {
  it('Login with valid credential', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.contains('Products')
  })

  it('Login with invalid password', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('invalid_password')
    cy.get('#login-button').click()
    cy.contains('Epic sadface: Username and password do not match any user in this service')
  })
})