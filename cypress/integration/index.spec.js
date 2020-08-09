describe("Homepage test", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });

  it("finds the content", () => {
    cy.visit("/");

    cy.contains("Coming soon");
    cy.findAllByAltText("⚡️").should("have.length", 2);
  });
});

describe("404 page test", () => {
  it("successfully loads", () => {
    cy.visit("/", { failOnStatusCode: false });
  });

  it("finds the content", () => {
    cy.visit("/404", { failOnStatusCode: false });

    cy.contains("Coming soon");
    cy.findAllByAltText("⚡️").should("have.length", 2);
  });
});
