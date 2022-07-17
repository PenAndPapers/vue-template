// https://docs.cypress.io/api/introduction/api.html

describe("Register page Testing", () => {
  it("visits register page", () => {
    window.sessionStorage.clear();
    cy.visit("http://localhost:3000/register");
    cy.contains("h1", "Register");
  });

  it("display list of users page after submitting register form", () => {
    cy.contains("button", "Submit").click();
    cy.contains("h1", "User");
  });
});
