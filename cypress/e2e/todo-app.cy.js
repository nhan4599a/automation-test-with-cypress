describe('Todo app', () => {

    it('Todo app should display with title is "Todo App"', () => {
        cy.visit('http://demo-todo-app.eastasia.cloudapp.azure.com/');

        cy.title().should('eq', 'Todo App');
    });

    it('Todo app can add todo item correctly', () => {
        cy.visit('http://demo-todo-app.eastasia.cloudapp.azure.com/');

        cy.get('input').type('New task');
        cy.get('button').click();

        cy.get('#myList').children().should('have.length', 2);
        cy.get('#myList').children().last().should('not.have.class', 'checked');
    });
});