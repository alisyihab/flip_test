context('task-2', () => {
  beforeEach(() => {
    cy.visit('https://flip.id/');
  })
  describe('Assertion teks dan kemunculan', () => {
    it('Assertion text button Bantuan ', function () {
      cy.xpath('//*[@id="section1"]/div[1]/div[1]/ul/li[1]/a')
        .should('be.visible')
        .should('have.text', 'Bantuan')
      ;
    });

    it('Assertion text button Karir ', function () {
      cy.xpath('//*[@id="section1"]/div[1]/div[1]/ul/li[2]/a')
        .should('be.visible')
        .should('have.text', "Karir")
      ;
    });

    it('Assertion text button Biaya ', function () {
      cy.xpath('//*[@id="section1"]/div[1]/div[1]/ul/li[3]/a')
        .should('be.visible')
        .should('have.text', 'Biaya')
      ;
    });

    it('Assertion text button Masuk ', function () {
      cy.xpath('//*[@id="section1"]/div[1]/div[1]/ul/li[4]/a')
        .should('be.visible')
        .should('have.text', 'Masuk')
      ;
    });
  })

  describe('Click masing - masing button', function () {
    it('Click button Bantuan ', function () {
      cy.xpath('//*[@id="section1"]/div[1]/div[1]/ul/li[1]/a')
        .should('be.visible')
        .click();
    });

    it('Click button Karir ', function () {
      cy.xpath('//*[@id="section1"]/div[1]/div[1]/ul/li[2]/a')
        .should('be.visible')
        .click();
    });

    it('Click text button Biaya ', function () {
      cy.xpath('//*[@id="section1"]/div[1]/div[1]/ul/li[3]/a')
        .should('be.visible')
        .click();
    });

    it('Click button Masuk ', function () {
      cy.xpath('//*[@id="section1"]/div[1]/div[1]/ul/li[4]/a')
        .should('be.visible')
        .click();
    });
  })
})