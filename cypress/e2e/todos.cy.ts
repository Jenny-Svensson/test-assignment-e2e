import { contains } from "../../node_modules/cypress/types/jquery/index";

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

});

describe("should add movies into movie-container", () => {
  it("should add a movies", () => {

    cy.get("input").type("Star Wars").should("have.value", "Star Wars"); // söker efter filmer som heter Star Wars
    cy.get("#searchForm").submit(); // Submitta en form
    cy.get("h3").contains("Star Wars"); // söker om alla h3 taggar innehåller Star Wars

    });
  



})