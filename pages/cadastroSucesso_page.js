const { I } = inject();

module.exports = {

    campos: {
       nome: "#first_name",
       sobreNome: "#last_name",
       endereco: "#address1",
       estado: "#state",
       cidade: "#city",
       cep: "#zipcode",
       numero: "#mobile_number" , 
       senha: "#password",
       dia: "#days" ,
       mes: "#months",
       ano: "#years" ,
    },
  
    button: {
      masculino: "(//input[@type = 'radio'])[1]",

    },
  
    mensagens: {
  
    },

      cadastroUsuarioSucesso(name , lastName) {
        //I.waitForElement("(//b['Enter Account Information']) [1]" , 6)
        
        I.click(this.button.masculino)
        I.fillField(this.campos.senha, secret("Qatester"))
        I.selectOption(this.campos.dia, '22')
        I.selectOption(this.campos.mes, '8')
        I.selectOption(this.campos.ano, '1996')
        I.scrollTo(this.campos.endereço)
        I.wait(1)
        I.fillField(this.campos.nome , name)
        I.fillField(this.campos.sobreNome, lastName)
        I.fillField(this.campos.endereco, 'Rua 1')
        I.selectOption('#country', 'India')
        I.scrollTo(this.campos.cep)
        I.wait(2)
        I.fillField(this.campos.estado, secret("varginia"))
        I.fillField(this.campos.cidade, secret("amapa"))
        I.fillField(this.campos.cep, secret("72405-550"))
        I.fillField(this.campos.numero, secret("(85) 99999999"))
        
   
     
   },
    
    confirmarUsuario() {
        I.click("(//button[@type = 'submit']) [1]")
    }}