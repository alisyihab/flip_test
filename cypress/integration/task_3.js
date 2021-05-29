context('task-3', () => {
  describe('Get List User', () => {
    beforeEach(() => cy.request('https://reqres.in/api/users?page=2').as('users'));

    it('Validate the header', function () {
      cy.get('@users')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json; charset=utf-8')
    });

    it('should return response status code 200', function () {
      cy.get('@users').its('status').should('be.equal', 200)
    });
  });

  describe('Post User', () => {
    beforeEach(() => {
      cy.request({
        method: "POST",
        url: "https://reqres.in/api/users",
        body: {
          name: "morpheus",
          job: "leader"
        }
      }).as('postUser');
    });

    it('Validate the header post users', function () {
      cy.get('@postUser')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json; charset=utf-8')
    });

    it('should return response status code 201', function () {
      cy.get('@postUser').its('status').should('be.equal', 201)
    });
  });
})