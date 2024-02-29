/// <reference types="cypress" />

// npx cypress open
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://www.saucedemo.com/')
  })

    it('Проверка заголовка страницы', () => {
    cy.title().should('include', 'Swag Labs')
  })

  it('Проверка входа в систему', () => {
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('.btn_action').click()
    cy.url().should('include', '/inventory.html')
  })

  it('Проверка добавления товара в корзину', () => {
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('.btn_action').click()
    cy.get('.btn_primary.btn_inventory').first().click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })

  it('Проверка удаления товара из корзины', () => {
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('.btn_action').click()
    cy.get('.btn_primary.btn_inventory').first().click()
    cy.get('.shopping_cart_link').click()
    cy.get('.btn_secondary.cart_button').click()
    cy.get('.cart_quantity').should('not.exist')
  })

  it('Проверка оформления заказа', () => {
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('.btn_action').click()
    cy.get('.btn_primary.btn_inventory').first().click()
    cy.get('.shopping_cart_link').click()
    cy.get('.btn_action.checkout_button').click()
    cy.get('[data-test=firstName]').type('Test')
    cy.get('[data-test=lastName]').type('User')
    cy.get('[data-test=postalCode]').type('12345')
    cy.get('.btn_primary.cart_button').click()
    cy.get('.btn_action.cart_button').click()
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
  })
  it('Проверка выхода из системы', () => {
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('.btn_action').click()
    cy.get('.bm-burger-button > button').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('[data-test=login-button]')
  })
})