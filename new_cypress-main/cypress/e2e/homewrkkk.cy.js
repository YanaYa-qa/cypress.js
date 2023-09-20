describe('Тестирование покупки', function () {

    it('Очень длинный тест', function () {
       cy.visit('https://pokemonbattle.me/');  //захожу на сайт
       cy.get(':nth-child(1) > .auth__input').type('');  //ТУТ НАДО ВСТАВИТЬ СВОЮ ПОЧТУ
       cy.get('#password').type('');  //ТУТ НАДО ВСТАВИТЬ ПАРОЛЬ
       cy.get('.auth__button').click();  //нажимаю кнопку авторизации
       cy.wait(2000) //жду две секунды
       cy.get('.header__btns > [href="/shop"]').click();  //иду в магазин
       cy.get(':nth-child(12) > .shop__button').click();  //нажимаю купить на аватаре !НАДО ВЫБРАТЬ НЕ СВОЙ АВАТАР!
       cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5100000000000008');  //ввожу номер карты
       cy.get(':nth-child(1) > .pay_base-input-v2').type('1226');  //ввожу срок действия карты
       cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');  //ввожу сvv
       cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Jane D Luffy');  //ввожу имя
       cy.get('.pay-btn').click();  //нажимаю оплатить
       cy.get('#cardnumber').type('56456');  //ввожу код из смс
       cy.get('.payment__submit-button').click();  //жму оплатить
       cy.contains('Покупка прошла успешно').should('be.visible');  //ищу увед об успешной покупке
    })
})