context('task-3', () => {
  describe('Get List User', () => {
    beforeEach(() => cy.request('https://reqres.in/api/users?page=2').as('users'));
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

    it('should return response status code 201', function () {
      cy.get('@postUser').its('status').should('be.equal', 201)
    });
  });
})