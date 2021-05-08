describe('SignIn', () => {
    it('should navigate to sign-up', () => {
        cy.get('.btn-link').click();
        cy.get('#emailAddressTxtField').clear();
        cy.get('#emailAddressTxtField').type('raghavendra.nk7@gmail.com');
        cy.get('#passwordTxtField').clear();
        cy.get('#passwordTxtField').type('12345');
        cy.get('.MuiButton-label').click();
        cy.get('.btn-link').click();
    });
    it('should sign-in and navigate to dashboard', () => {
        cy.get(
            ':nth-child(2) > #RRUCTextField > .MuiFormControl-root > .MuiInputBase-root'
        ).click();
        cy.get('#emailAddressTxtField').clear();
        cy.get('#emailAddressTxtField').type('raghavendra.nk7@gmail.com');
        cy.get('#passwordTxtField').clear();
        cy.get('#passwordTxtField').type('12345');
        cy.get('.MuiButton-label').click();
        cy.wait(10000);
        cy.get('circle').click();
        cy.get('.footer-menu-item').click();
    });
});
