// import { contains } from "../../node_modules/cypress/types/jquery/index";

beforeEach(() => {
  cy.visit("/");
});


describe("should test to see if all elements are there", () => {
  it("should find input", () => {
    cy.get("input").should("exist"); // kollar så att en input ruta finns
  });

  it("should find the search button", () => {
    cy.get("button").should("contain", "Sök"); // kolla så att en knapp som heter sök finns.
  });

  it("should find that a button exist", () => {
    cy.get("button").should("exist");
  })

});

describe("should GET movie from API", () => {
  it("should be able to type value", () => {
    cy.get("input").type("Star Wars").should("have.value", "Star Wars"); // söker efter filmer som heter Star Wars

    });

  it("should search for movies Star Wars ", () => {
    cy.get("input").type("Star Wars").should("have.value", "Star Wars");
    cy.get("#searchForm").submit(); // Submitta en form
    cy.get("h3").contains("Star Wars"); // söker om alla h3 taggar innehåller Star Wars
    cy.get("h3").should("exist"); // söker så att h3 tag finns
    cy.get("img").should("exist"); // söker så att en img tag finns

  });

  it("should have h3 length 1 ", () => {
    cy.get("input").type("Star Wars").should("have.value", "Star Wars");
    cy.get("#searchForm").submit(); // Submitta en form
    cy.get("h3").should("have.length.greaterThan", 1); // h3 eller titlen måste ha en längd på större 1
  });
});

describe("should create p-tag with follow message: Inga sökresultat att visa ", () => {
  it("should create p-tag if input empty ", () => {
    cy.get("input").should("have.value", ""); // input har inget värde
  });

  it("should create a p-tag and show inga sökresultat att visa", () => {
    cy.get("input").should("have.value", ""); 
    cy.get("#searchForm").submit(); // trycker på knappen
    cy.get("p").contains("Inga sökresultat att visa"); // då dyker en p-tag upp med följande meddelande
  });

  it("should show error message when typing less than 2 letters", () => {
    cy.get("input").type("j").should("have.value", "j"); // söker på en bokstav
    cy.get("#searchForm").submit(); // trycker på knappen
    cy.get("p").contains("Inga sökresultat att visa"); // då dyker en p-tag upp med följande meddelande
  });




});

