/// <reference types="cypress" />

context('Register', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/register')
    })


    it('should register successfully', () => {
        cy.get('#name')
            .type('Jamie Dong')
            .should('have.value', 'Jamie Dong')

        cy.get('#email')
            .type('jamiedong@example.com')
            .should('have.value', 'jamiedong@example.com')

        cy.get('#password')
            .type('Password123')
            .should('have.value', 'Password123')

        cy.get('#card')
            .type('9881123674375421')
            .should('have.value', '9881123674375421')

        cy.get('#register').click()

        //cy.title().should('include', 'login')

        // cy.get('#email')
        //     .type('janedoe@example.com')
        //     .should('have.value', 'janedoe@example.com')

        // cy.get('#password')
        //     .type('Password123')
        //     .should('have.value', 'Password123')   
        
        //     cy.get('#login').click()

        //cy.title().should('include', 'login')
    })
})