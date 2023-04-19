const faker = require ('faker-br');
var nome = faker.name.firstName();
var telefone = faker.phone.phoneNumber();
var email = faker.internet.email();

describe ('Teste referente a tela de Cadastro',()=>{
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
});