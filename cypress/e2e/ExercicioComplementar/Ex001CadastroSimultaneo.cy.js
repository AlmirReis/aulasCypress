const faker = require ('faker-br');

describe ('Teste referente a tela de Cadastro',()=>{
   for (let i =1 ;i <= 10; i++) {

   const nome = faker.name.firstName();
   const telefone = faker.phone.phoneNumber();
   const email = faker.internet.email();
   
     

it('Teste Válido Cadastro com dados válidos',()=>{
    
    cy.visit('https://jgsl-systemcalling.netlify.app/')
    
    cy.get('.buttonLinkHomeRegister').click()
    
    cy.get('[placeholder="Nome"]').type(nome)
    cy.get('[placeholder="Telefone"]').type(telefone)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[type="password"]').type('seila123')

    cy.get('.buttonRegister').click()
    cy.wait(5000)
    cy.get('[href="/profile"] > li').click()
    cy.get('[disabled=""]')
          .invoke('val')
          .should('exist',email)
    });

  }
});