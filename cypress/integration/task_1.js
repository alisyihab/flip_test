context('task-1', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000/');
    cy.server();
    cy.fixture("data_transaction")
      .as('data')
      .then((data) => {
        cy.route('GET', 'data_transaction', data)
      });
  });

  it('Check row 1', function () {
    cy.get('tbody #row1').each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('td').eq(0).should('have.text', this.data[0].id)
        cy.get('td').eq(1).should('have.text', this.data[0].username)
        cy.get('td').eq(2).should('have.text', this.data[0].source_bank)
        cy.get('td').eq(3).should('have.text', this.data[0].destination_bank)
        cy.get('td').eq(4).should('have.text', this.data[0].amount)
      })
    })
  });

  it('Check row 2', function () {
    cy.get('tbody #row2').each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('td').eq(0).should('have.text', this.data[1].id)
        cy.get('td').eq(1).should('have.text', this.data[1].username)
        cy.get('td').eq(2).should('have.text', this.data[1].source_bank)
        cy.get('td').eq(3).should('have.text', this.data[1].destination_bank)
        cy.get('td').eq(4).should('have.text', this.data[1].amount)
      })
    })
  });

  it('Check row 3', function () {
    cy.get('tbody #row3').each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('td').eq(0).should('have.text', this.data[2].id)
        cy.get('td').eq(1).should('have.text', this.data[2].username)
        cy.get('td').eq(2).should('have.text', this.data[2].source_bank)
        cy.get('td').eq(3).should('have.text', this.data[2].destination_bank)
        cy.get('td').eq(4).should('have.text', this.data[2].amount)
      })
    })
  });

  it('Check row 4', function () {
    cy.get('tbody #row4').each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('td').eq(0).should('have.text', this.data[3].id)
        cy.get('td').eq(1).should('have.text', this.data[3].username)
        cy.get('td').eq(2).should('have.text', this.data[3].source_bank)
        cy.get('td').eq(3).should('have.text', this.data[3].destination_bank)
        cy.get('td').eq(4).should('have.text', this.data[3].amount)
      })
    })
  });

  it('Check row 5', function () {
    cy.get('tbody #row5').each(($el) => {
      cy.wrap($el).within(() => {
        cy.get('td').eq(0).should('have.text', this.data[4].id)
        cy.get('td').eq(1).should('have.text', this.data[4].username)
        cy.get('td').eq(2).should('have.text', this.data[4].source_bank)
        cy.get('td').eq(3).should('have.text', this.data[4].destination_bank)
        cy.get('td').eq(4).should('have.text', this.data[4].amount)
      })
    })
  });
})