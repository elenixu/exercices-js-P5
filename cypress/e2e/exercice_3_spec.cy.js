describe('Validations Exercice 3:', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/exercices-js-P5/Exercice3/index.html') // Full path to the file
  })

  it('Should have blue p', () => {
    cy.get('p').should('have.css', 'color', 'rgb(0, 0, 255)')
  })

  it('Should have Arial font', () => {
    cy.get('p').should('have.css', 'font-family').and('match', /Arial/)
  })

  it('Should have main displayed with flexbox', () => {
    cy.get('main').should('have.css', 'display', 'flex') // Updated to test the "main" element
  })
})
