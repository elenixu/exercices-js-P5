describe('Validations Exercice 7: ', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/exercices-js-P5/Exercice7/index.html') // Updated URL to your Exercice 7 location
  })

  it('Normal display must be as defined on creating project', () => {
    // Check that the <h1> has a font size of 30px
    cy.get('h1').should('have.css', 'font-size', '30px')

    // Check that the navigation list (<ul>) has flex display
    cy.get('nav ul').should('have.css', 'display', 'flex')

    // Check that the navigation list (<ul>) has a row flex direction
    cy.get('nav ul').should('have.css', 'flex-direction', 'row')

    // Check the first <li> in the <ul> for correct right margin
    cy.get('nav ul li:first').should('have.css', 'margin-right', '20px')
  })

  it('Shows on responsive some changes', () => {
    // Set viewport size to simulate mobile devices
    cy.viewport(320, 900)

    // Check that the <h1> font size changes to 20px on small screens
    cy.get('h1').should('have.css', 'font-size', '20px')

    // Check that the navigation list (<ul>) still has flex display
    cy.get('nav ul').should('have.css', 'display', 'flex')

    // Check that the navigation list (<ul>) switches to a column layout on mobile
    cy.get('nav ul').should('have.css', 'flex-direction', 'column')

    // Check that the first <li> has no right margin on mobile screens
    cy.get('nav ul li:first').should('have.css', 'margin-right', '0px')
  })
})
