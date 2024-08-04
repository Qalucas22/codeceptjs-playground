const { I } = inject();

module.exports = {

  campos: {
    
  },

  butoes : {
    loginButton: "//a[@href='/login']",
  },

  mensagens: {

  },


    acessarLoginPage() {
    
    I.click(this.butoes.loginButton)
  }

}
