// https://docs.cypress.io/api/introduction/api.html

describe("Users Page Testing", () => {
  it("Login", () => {
    cy.login();
  });

  it("Contains users", () => {
    cy.wait(4000);
    cy.url({ decode: true }).should("contain", "/users");
    cy.get("div.user-card").should("have.length.at.least", 1);
  });
});
