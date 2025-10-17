/* eslint-env mocha, cypress */
describe('Моя React апка', () => {
  it('показує заголовок', () => {
    cy.visit('http://localhost:5173') // URL твоєї апки, яку запускає Vite
    cy.contains('Vite + React')       // перевіряє, що на сторінці є текст
  })
})