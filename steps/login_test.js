
 var validacao = require('assert')       //exportando a biblioteca
 var faker = require('faker');

const { I } = inject()
Feature('login');
BeforeSuite( () => {
    // vai execultar sempre antes de tudo da feature
    console.log('Antes de tudo')

})

Before( () => {
    // vai execultar sempre antes de cada cenario. 
    I.amOnPage('/') // antes de cada cenario, vai acessar a apkicação do site.
})

After(() => {
    // vai executar depois de cada cenario. 
    console.log('depois dos testescxczxcxzc.')
})

AfterSuite(() => {
    // vai executar depois de toda a feature vai execultar os comandos
    console.log('depois da feaure de testes.')
})

Scenario(' Acesar tela de criar conta', ({I}) => {
   
    var email=  faker.internet.email()
    I.amOnPage('/')
    //pause() // serve para debugar, usando esse pause, conseguimos realizar os testes automatizados passo a passo, assim quando quebrar veremos onde está quebrando, fora a opção de ver nos logs.
    I.click("//a[@href= '/login']")

    I.fillField("//input[@type= 'text']" , "Qatester")
    I.fillField("//input[@data-qa= 'signup-email']" , email)
    I.click("//button[@data-qa= 'signup-button']")

   I.wait(2)

})
// const campos = 
// {
   
//     // CAMPO TELA DE LOGIN
//     email: "//input[@type='text']" ,
//     senha: "//input[@type='password'] " ,
//     // CAMPOS TELA DE CADASTRO
//     nome: "//input[@type = 'text'] ",
//     emailCadastro: "(//input[@type = 'email']) [1] ",
//     senhaCadastro: "(//input[@type = 'password']) [1] ", 

// }
    
// const button = {
//     // BTN TELA DE LOGIN
//     btnCadastro :"//a[@href='/register']" ,
//     btnLogin: "(//a[@href='/login']) [1]",
//     //BTN TELA DE CADASTRO
//     btnRegistrarUsuario: "#btnRegister",
// }

// Scenario('cadastro de usuario', async({I}) => {
//     I.amOnPage('/')
//     // pegar informação do titulo da pagina
//     var title = await I.grabTitle() 
//     validacao.equal(title, 'QAZANDO Shop E-Commerce') // foi preciso importar biblioteca

//     I.click(button.btnCadastro)
//     I.waitForElement(button.btnRegistrarUsuario, 10)
    
//     var tituloPrincipal =  await I.grabTextFrom("//h3[contains(text(), 'Cadastro de usuário')]")
//     validacao.equal(tituloPrincipal , 'Cadastro de usuário')
//     I.wait(3)

    
    // I.fillField(campos.nome, "Qatester22")
    // I.fillField(campos.emailCadastro, "Qatester@gmail.com")
    // I.fillField(campos.senhaCadastro, "Qatester22")

    // I.click(button.btnRegistrarUsuario)

    // I.wait(5)

//})


