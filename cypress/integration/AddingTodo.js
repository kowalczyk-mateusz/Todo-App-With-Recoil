describe('TodoTest', ()=>{
    it('Adding Todo', ()=>{
        cy.visit('http://localhost:3000/');
        //WITH TITLE
        cy.get('input[placeholder="Add Todo..."]').type('Test Todo')
        cy.contains('button', 'Add Todo').click();
        cy.contains('span', 'Test Todo')
        //WITHOUT TITLE
        cy.get('input[placeholder="Add Todo..."]').type('{shift}')
        cy.contains('button', 'Add Todo').click();
        cy.contains('span', 'Test Todo' , { matchCase: false })
    })
})
