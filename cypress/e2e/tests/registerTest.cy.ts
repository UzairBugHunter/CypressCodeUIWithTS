import RegisterPageFile from '../../../pages/registerPage'; // Ensure this file is converted to TypeScript
import { faker } from '@faker-js/faker';
import { describe, it, before } from 'mocha';

const registerObj = new RegisterPageFile();
const firstName: string = faker.person.firstName();
const lastName: string = faker.person.lastName();
const email: string = faker.internet.email();
const telephone: string = faker.phone.number();
const password: string = faker.internet.password();

describe("Automation flow of Cypress", () => {
  it("Registration Flow", () => {
    registerObj.openBaseURL();
    registerObj.enterFirstName(firstName);
    registerObj.enterLastName(lastName);
    registerObj.enterEmail(email);
    registerObj.enterTelephone(telephone);
    registerObj.enterPassword(password);
    registerObj.confirmPassword(password);
    registerObj.selectNewsLetter();
    registerObj.agreeTerms();
    registerObj.clickContinue();
    registerObj.assertAccountCreation();
  });
});
