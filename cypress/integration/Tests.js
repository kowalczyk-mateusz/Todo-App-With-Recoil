describe('TODO TEST', ()=>{
    it('Delete Todo', ()=>{
        cy.visit('http://localhost:3000/');
        cy.wait(1000)
        //DELETE TODOS
        cy.get('.css-1sxuaqp')
        cy.get('.css-qxkkzu-DeleteIcon').click({ multiple: true })
        cy.get('.css-vurnku').not('span')

    }),
    it('Adding Todo', ()=>{
        cy.visit('http://localhost:3000/');
        cy.wait(1000)
        //WITH TITLE
        cy.get('input[placeholder="Add Todo..."]').type('Test Todo')
        cy.contains('button', 'Add Todo').click();
        cy.contains('span', 'Test Todo')
        //WITHOUT TITLE
        cy.get('input[placeholder="Add Todo..."]').type('{shift}')
        cy.contains('button', 'Add Todo').click();
        cy.contains('span', 'Test Todo' , { matchCase: false })

    })
    it('Change status', ()=>{
        cy.visit('http://localhost:3000/');
        cy.wait(1000)
        
        cy.get('span').then(($active)=>{
            if($active.hasClass('css-8jojbc')){
                cy.get('.css-29jexh-DoneIcon').click({multiple:true})
            }
        })
    })
    it('Change Value', ()=>{
        cy.visit('http://localhost:3000/');
        cy.wait(1000)
        cy.get('.css-1sxuaqp')
        cy.get('.css-1mepkht-EditIcon').first().click()
        cy.get('.css-1o8kv8w').type('123')
        cy.contains('button', 'Save').click();
        cy.contains('span', '123')
    })
})
