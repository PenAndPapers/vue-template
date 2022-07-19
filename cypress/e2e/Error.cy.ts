// https://docs.cypress.io/api/introduction/api.html

describe("Error page Testing", () => {
  it("Error Page Testing", () => {
    cy.visit("http://localhost:3000/page-not-found");
    cy.contains("h1", "404");
    cy.contains("p", "Page not found");
  });

  it("Redirects to 404 page", () => {
    cy.visit("http://localhost:3000/this-is-not-valid-url");
    cy.wait(3000);
    cy.url().should("contain", "/page-not-found");
  });
});
