context('task-2 - get element by xpath & attribute', () => {
  beforeEach(() => {
    cy.visit('https://flip.id')
  })

  //assert text by xpath
  describe('Assertion teks', () => {
    it('Assertion text button Bantuan, Karir, Biaya, Masuk ', function () {
      cy.xpath('//*[@id="section1"]/div[1]/div[1]/ul/li[1]/a')
        .should('be.visible')
        .should('have.text', 'Bantuan');

      cy.xpath('//*[@id="section1"]/div[1]/div[1]/ul/li[2]/a')
        .should('be.visible')
        .should('have.text', "Karir")
      ;

      cy.xpath('//*[@id="section1"]/div[1]/div[1]/ul/li[3]/a')
        .should('be.visible')
        .should('have.text', 'Biaya')
      ;

      cy.xpath('//*[@id="section1"]/div[1]/div[1]/ul/li[4]/a')
        .should('be.visible')
        .should('have.text', 'Masuk')
      ;
    });
  });

  // click button by xpath
  describe('Click masing - masing button', function () {
    it('Click button Bantuan ', function () {
      cy.xpath('//*[@id="section1"]/div[1]/div[1]/ul/li[1]/a').click();
    });

    it('Click button Karir ', function () {
      cy.xpath('//*[@id="section1"]/div[1]/div[1]/ul/li[2]/a').click();
    });

    it('Click text button Biaya ', function () {
      cy.xpath('//*[@id="section1"]/div[1]/div[1]/ul/li[3]/a').click();
    });

    it('Click button Masuk ', function () {
      cy.xpath('//*[@id="section1"]/div[1]/div[1]/ul/li[4]/a').click();
    });
  })

  // assert text by attribute
  describe('Assertion text by attribut', () => {
    it('assertion text button bantuan, karir, biaya, masuk', function () {
      cy.get('.navbar-header.pull-right > ul ').each(($el) => {
        cy.wrap($el).within(() => {
          cy.get('li').find('a').eq(0).should('have.text', 'Bantuan')
          cy.get('li').find('a').eq(1).should('have.text', 'Karir')
          cy.get('li').find('a').eq(2).should('have.text', 'Biaya')
          cy.get('li').find('a').eq(3).should('have.text', 'Masuk')
        })
      });
    });
  })

  describe('Click Button by attribut', () => {
    it('Click button bantuan', function () {
      cy.get('.navbar-header.pull-right > ul ').each(($el) => {
        cy.wrap($el).within(() => {
          cy.get('li').find('a').eq(0).click();
        })
      });
    });

    it('Click button Karir', function () {
      cy.get('.navbar-header.pull-right > ul ').each(($el) => {
        cy.wrap($el).within(() => {
          cy.get('li').find('a').eq(1).click();
        })
      });
    });

    it('Click button Biaya', function () {
      cy.get('.navbar-header.pull-right > ul ').each(($el) => {
        cy.wrap($el).within(() => {
          cy.get('li').find('a').eq(2).click();
        })
      });
    });

    it('Click button Masuk', function () {
      cy.get('.navbar-header.pull-right > ul ').each(($el) => {
        cy.wrap($el).within(() => {
          cy.get('li').find('a').eq(3).click();
        })
      });
    });
  })
})