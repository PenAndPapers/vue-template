// https://docs.cypress.io/api/introduction/api.html

describe("Login Page Testing", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    cy.visit("http://localhost:3000/login");
    cy.get("#email").clear();
    cy.get("#password").clear();
  });

  it("Will not submit if email and password are both empty", () => {
    cy.contains("button", "Submit").click();
    cy.wait(3000);
    cy.url().should("contain", "/login");
  });

  it("Will not submit if email is empty", () => {
    cy.get("#password").type("password");
    cy.contains("button", "Submit").click();
    cy.wait(3000);
    cy.url().should("contain", "/login");
  });

  it("Will not submit if password is empty", () => {
    cy.get("#email").type("test@email.com");
    cy.contains("button", "Submit").click();
    cy.wait(3000);
    cy.url().should("contain", "/login");
  });

  it("Will not submit if it's not valid email", () => {
    cy.get("#email").type("test@email");
    cy.get("#password").type("password");
    cy.contains("button", "Submit").click();
    cy.wait(3000);
    cy.url().should("contain", "/login");
  });

  it("Login", () => {
    cy.login();
  });
});
