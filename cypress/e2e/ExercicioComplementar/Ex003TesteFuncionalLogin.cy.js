


describe('Teste Funcional de login', () => {
 
  it('Realizar teste de login com sucesso', () => {
    
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user') 
    cy.get('[data-test="password"]').type('secret_sauce') 
    cy.get('[data-test="login-button"]').click() 
    //cy.url().should('include', '/inventory.html')

  });

  it('Realizar teste de login inválido', () => {

    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('usuario_invalido')
    cy.get('[data-test="password"]').type('secret_sauce') 
    cy.get('[data-test="login-button"]').click() 
    cy.get('[data-test=error]').should('contain','Epic sadface: Username and password do not match any user in this service')
 
  });

 
  it('Realizar teste de senha inválida', () => {
   
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('senha_invalida')
    cy.get('[data-test="login-button"]').click(); 
    cy.get('[data-test=error]').should('contain','Epic sadface: Username and password do not match any user in this service')
 
  });

});
