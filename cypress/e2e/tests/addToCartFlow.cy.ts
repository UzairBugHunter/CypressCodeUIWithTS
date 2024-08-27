// Import the necessary modules
import AddToCart from "../../../pages/addToCartPage";
import testData from "../../fixtures/testData.json";
import { describe, it, before } from 'mocha';

// Initialize the page object
const addToCart = new AddToCart();

// Define the test suite
describe("Add to cart Flow", () => {
  
  // Use a TypeScript type for the test data if needed
  type TestData = {
    login: {
      username: string;
      password: string;
    };
    product: {
      productName: string;
    };
    message: {
      successMessage: string;
    };
  };

  // Ensure testData conforms to the TestData type
  const typedTestData: TestData = testData as TestData;

  // Setup before tests
  before("Sign in", () => {
    // Use TypeScript for method parameters and return types
    cy.login(typedTestData.login.username, typedTestData.login.password);
  });

  // Define the individual test
  it("Add to cart test case", () => {
    // Use TypeScript to ensure methods exist on AddToCart
    addToCart.searchProduct(typedTestData.product.productName);
    addToCart.clickSearchIcon();
    addToCart.clickProduct();
    addToCart.addToCart();
    
    // Verify the success message
    addToCart.verifySuccess(
      typedTestData.message.successMessage,
      typedTestData.product.productName
    )
  });

});
