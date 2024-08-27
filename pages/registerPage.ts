export default class RegisterPageFile {
    private webLocators: { [key: string]: string } = {
      firstName: '#input-firstname',
      lastName: '#input-lastname',
      email: '#input-email',
      telephone: '#input-telephone',
      password: '#input-password',
      confirmPassword: '#input-confirm',
      newsletter: 'input[type="radio"][value="1"]',
      agreeTerms: "input[type='checkbox']",
      continueButton: '.btn.btn-primary',
      accountCreation: '#content'
    };
  
    openBaseURL(): void {
      cy.visit(Cypress.env('URL'));
    }
  
    enterFirstName(firstName: string): void {
      cy.get(this.webLocators.firstName).type(firstName);
    }
  
    enterLastName(lastName: string): void {
      cy.get(this.webLocators.lastName).type(lastName);
    }
  
    enterEmail(email: string): void {
      cy.get(this.webLocators.email).type(email);
    }
  
    enterTelephone(telephone: string): void {
      cy.get(this.webLocators.telephone).type(telephone);
    }
  
    enterPassword(password: string): void {
      cy.get(this.webLocators.password).type(password);
    }
  
    confirmPassword(confirmPassword: string): void {
      cy.get(this.webLocators.confirmPassword).type(confirmPassword);
    }
  
    selectNewsLetter(): void {
      cy.get(this.webLocators.newsletter).eq(1).click();
    }
  
    agreeTerms(): void {
      cy.get(this.webLocators.agreeTerms).check();
    }
  
    clickContinue(): void {
      cy.get(this.webLocators.continueButton).click();
    }
  
    assertAccountCreation(): void {
       cy.get(this.webLocators.accountCreation).should('contain', 'Congratulations');
    }
  }
  