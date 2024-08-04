//var validacao = require('assert')       //exportando a biblioteca
var faker = require('faker');
const {I, home_page, login_page, cadastroSucesso_pagePage , minhaConta_pagePage } = inject()

Feature('Criar um novo usuario');

Scenario('Registar uma nova conta' ,  () => {
    var randomEmail = faker.internet.email();
    var name = faker.name.firstName() 
    var lastName = faker.name.lastName()
    
   // console.log(`${name} ${lastName}`)
    
  
    I.amOnPage('/')
    // home
    home_page.acessarLoginPage()

    //TELA DE LOGIN
    login_page.criarConta(faker.internet.email())

    // TELA DE CRIAR CONTA
    
    //Cadastrando campos do usuario
    cadastroSucesso_pagePage.cadastroUsuarioSucesso(name,lastName)
    cadastroSucesso_pagePage.confirmarUsuario()

    
    
    // Validando que a conta está logada.
    minhaConta_pagePage.validarUsuarioLogado()
    

    })
    


// aqui 






  

    