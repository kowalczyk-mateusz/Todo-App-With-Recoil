describe('TodoTest', ()=>{
    it('Adding Todo', ()=>{
        cy.visit('http://localhost:3000/');
        cy.get('input[placeholder="Add Todo..."]').type('Test Todo')
        cy.contains('button', 'Add Todo').click();
        cy.contains('span', 'Test Todo')
    })
})