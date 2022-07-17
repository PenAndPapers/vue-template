// https://docs.cypress.io/api/introduction/api.html

describe("Home page Testing", () => {
  it("visits the app root url", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("h1", "Home");
  });
});
