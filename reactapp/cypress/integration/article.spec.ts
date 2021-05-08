describe('Article', () => {
    it('should render articles statistics', () => {
        cy.get('#emailAddressTxtField').clear();
        cy.get('#emailAddressTxtField').type('raghavendra.nk7@gmail.com');
        cy.get('#passwordTxtField').clear();
        cy.get('#passwordTxtField').type('12345');
        cy.get('.MuiButton-label').click();
    });
    it('should add new article', () => {
        cy.get('#addNewArticle > .MuiButton-label').click();
        cy.get('.MuiButton-label').click();
        cy.get('#title').clear();
        cy.get('#title').type('NewTitle for article');
        cy.get('#description').click();
        cy.get('.MuiButton-label').click();
        cy.get('.MuiIconButton-label > .MuiSvgIcon-root').click();
    });
    it('should navigate to to manage articles', () => {
        cy.get('.active').click();
        cy.get('#manageArticles > .MuiButton-label').click();
    });
    it('should view article details', () => {
        cy.get(
            ':nth-child(1) > #RRUCCard > .card-content > .card-actions > .view > .action-label'
        ).click();
        cy.wait(10000);
    });
    it('should logout', () => {
        cy.get('.profile').click();
        cy.get('.footer-menu-item').click();
    });
});
