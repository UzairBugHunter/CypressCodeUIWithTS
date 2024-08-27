
export default class AddToCart {
    private webLocators: { [key: string]: string } = {
      searchItem: '.form-control.input-lg',
      clickSearchIcon: '.btn.btn-default.btn-lg',
      clickProduct: 'img[title="MacBook"]',
      addToCart: '#button-cart',
      verifySuccessAlert: '.alert.alert-success.alert-dismissible'
    };
  
    searchProduct(product: string): void {
      cy.get(this.webLocators.searchItem).type(product);
    }
  
    clickSearchIcon(): void {
      cy.get(this.webLocators.clickSearchIcon).click();
    }
  
    clickProduct(): void {
      cy.get(this.webLocators.clickProduct).eq(1).click();
    }
  
    addToCart(): void {
      cy.get(this.webLocators.addToCart).click();
    }
  
    verifySuccess(successMessage: string, productName: string): void {
      cy.get(this.webLocators.verifySuccessAlert)
        .should('contain', successMessage)
        .and('contain', productName);
    }
  
    }
  