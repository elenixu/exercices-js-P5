describe('Validations Exercice 6: ', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/exercices-js-P5/Exercice6/index.html')
  })

  it('Should have blue li', () => {
    cy.get('li').each(($li) => {
      expect($li).to.have.css('color', 'rgb(0, 0, 255)')
      expect($li).to.have.css('padding-left', '10px')
      expect($li).to.have.css('margin-bottom', '15px')
    })
  })
})
