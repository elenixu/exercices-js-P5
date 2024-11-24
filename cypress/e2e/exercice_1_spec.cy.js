describe('Exercice 1', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/exercices-js-P5/Exercice1/index.html') // Full path to your file
  })

  it('Should render the heading element', () => {
    cy.get('h1').contains('Mon premier Site Web', { matchCase: false })
  })

  it('Should render the paragraph element', () => {
    cy.get('p').contains('Bienvenue sur mon site Web !', { matchCase: false })
  })
})
