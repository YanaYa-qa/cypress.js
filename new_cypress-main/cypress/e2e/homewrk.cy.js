describe('Тестирование формы логина', function () {

    it('Позитивная проверка', function () {
       cy.visit('https://login.qa.studio/');  //захожу на сайт
       cy.get('#loginButton').should('be.disabled');  //кнопка авторизации неактивна
       cy.get('#mail').type('german@dolnikov.ru');  //ввожу корректный мейл
       cy.get('#loginButton').should('be.disabled');  //кнопка авторизации неактивна
       cy.get('#pass').type('iLoveqastudio1');  //ввожу корректный пароль
       cy.get('#loginButton').should('be.enabled');  //кнопка авторизации активна
       cy.get('#loginButton').click();  //нажатие кнопки авторизации
       cy.contains('Авторизация прошла успешно').should('be.visible');  //ищу увед об успешной авторизации
       cy.get('#exitMessageButton > .exitIcon').should('be.visible')  //ищу крестик
       })

    it('Логика восстановления пароля с багом', function () {
        cy.visit('https://login.qa.studio/');  //захожу на сайт
        cy.get('#forgotEmailButton').should('be.visible');  //кнопка забыли пароль видна
        cy.get('#forgotEmailButton').should('be.enabled');  //кнопка забыли пароль активна
        cy.get('#forgotEmailButton').click();  //прожимаю кнопку забыли пароль
        cy.get('#restoreEmailButton').should('be.disabled');  //кнопка отправить код неактивна
        cy.get('#mailForgot').type('german@dolnikov.ru');  //ввожу мейл
        cy.get('#restoreEmailButton').should('be.enabled');  //кнопка отправить код активна
        cy.get('#restoreEmailButton').click();  //прожимаю кнопку отправить код
        })

    it('Логика восстановления пароля', function () {
            cy.visit('https://login.qa.studio/');  //захожу на сайт
            cy.get('#forgotEmailButton').should('be.visible');  //кнопка забыли пароль видна
            cy.get('#forgotEmailButton').should('be.enabled');  //кнопка забыли пароль активна
            cy.get('#forgotEmailButton').click();  //прожимаю кнопку забыли пароль
            cy.get('#mailForgot').type('german@dolnikov.ru');  //ввожу мейл
            cy.get('#restoreEmailButton').should('be.enabled');  //кнопка отправить код активна
            cy.get('#restoreEmailButton').click();  //прожимаю кнопку отправить код
            cy.contains('Успешно отправили пароль на e-mail').should('be.visible');  //проверяю видимость элемента
            cy.get('#exitMessageButton > .exitIcon').should('be.visible')  //ищу крестик
            })

    it('Негативный кейс авторизации(пароль неверный)', function () {
            cy.visit('https://login.qa.studio/');  //захожу на сайт
            cy.get('#loginButton').should('be.disabled');  //кнопка авторизации неактивна
            cy.get('#mail').type('german@dolnikov.ru');  //ввожу корректный мейл
            cy.get('#loginButton').should('be.disabled');  //кнопка авторизации неактивна
            cy.get('#pass').type('iLoveqastudioverymuch1');  //ввожу некорректный пароль
            cy.get('#loginButton').should('be.enabled');  //кнопка авторизации активна
            cy.get('#loginButton').click();  //нажатие кнопки авторизации
            cy.contains('Такого логина или пароля нет').should('be.visible');  //ищу увед об ошибке
            cy.get('#exitMessageButton > .exitIcon').should('be.visible')  //ищу крестик
        })

    it('Негативный кейс авторизации(мейл неверный)', function () {
            cy.visit('https://login.qa.studio/');  //захожу на сайт
            cy.get('#loginButton').should('be.disabled');  //кнопка авторизации неактивна
            cy.get('#mail').type('germangerman@dolnikov.ru');  //ввожу некорректный мейл
            cy.get('#loginButton').should('be.disabled');  //кнопка авторизации неактивна
            cy.get('#pass').type('iLoveqastudio1');  //ввожу корректный пароль
            cy.get('#loginButton').should('be.enabled');  //кнопка авторизации активна
            cy.get('#loginButton').click();  //нажатие кнопки авторизации
            cy.contains('Такого логина или пароля нет').should('be.visible');  //ищу увед об ошибке
            cy.get('#exitMessageButton > .exitIcon').should('be.visible')  //ищу крестик
        })
    it('Негативный кейс авторизации(ошибка валидации)', function () {
            cy.visit('https://login.qa.studio/');  //захожу на сайт
            cy.get('#loginButton').should('be.disabled');  //кнопка авторизации неактивна
            cy.get('#mail').type('germandolnikov.ru');  //ввожу некорректный мейл без @
            cy.get('#loginButton').should('be.disabled');  //кнопка авторизации неактивна
            cy.get('#pass').type('iLoveqastudio1');  //ввожу корректный пароль
            cy.get('#loginButton').should('be.enabled');  //кнопка авторизации активна
            cy.get('#loginButton').click();  //нажатие кнопки авторизации
            cy.contains('Нужно исправить проблему валидации').should('be.visible');  //ищу увед об ошибке валидации
            cy.get('#exitMessageButton > .exitIcon').should('be.visible')  //ищу крестик  
        })      

    it('Негативный кейс авторизации(проверка регистра)', function () {
            cy.visit('https://login.qa.studio/');  //захожу на сайт
            cy.get('#loginButton').should('be.disabled');  //кнопка авторизации неактивна
            cy.get('#mail').type('GerMan@Dolnikov.ru');  //ввожу корректный мейл с буквами в другом регистре
            cy.get('#loginButton').should('be.disabled');  //кнопка авторизации неактивна
            cy.get('#pass').type('iLoveqastudio1');  //ввожу корректный пароль
            cy.get('#loginButton').should('be.enabled');  //кнопка авторизации активна
            cy.get('#loginButton').click();  //нажатие кнопки авторизации
            cy.contains('Авторизация прошла успешно').should('be.visible');  //ищу увед об успешной авторизации
            cy.get('#exitMessageButton > .exitIcon').should('be.visible')  //ищу крестик  
        }) 
})