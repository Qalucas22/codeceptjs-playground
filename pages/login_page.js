const { I } = inject();

module.exports = {

    campos: {
        nameRegister: "//input[@type= 'text']",
        emailRegister: "//input[@data-qa= 'signup-email']",
    },
  
    button: {
      signup: "//button[@data-qa= 'signup-button']",
      masculino: "(//input[@type = 'radio'])[1]",

    },
  
    mensagens: {
  
    },

    criarConta(email) {
        I.fillField(this.campos.nameRegister, 'Qatester22')
        I.fillField(this.campos.emailRegister, email)
        I.click(this.button.signup)
        
    }
  
}
