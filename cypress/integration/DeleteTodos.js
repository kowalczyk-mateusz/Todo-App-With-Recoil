describe('TodoTest', ()=>{
    it('Adding Todo', ()=>{
        cy.visit('http://localhost:3000/');
        //ADDING NEW TODO
        cy.get('input[placeholder="Add Todo..."]').type('Test Todo')
        cy.contains('button', 'Add Todo').click();
        cy.contains('span', 'Test Todo')
        //DELETE TODOS
        cy.get('.css-8jojbc')
        cy.get('.css-qxkkzu-DeleteIcon').click({ multiple: true })
        cy.get('span').not('Test Todo')

    })
})
