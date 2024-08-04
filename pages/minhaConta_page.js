const { I } = inject();

module.exports = {

  
  validarUsuarioLogado() {
    I.see('ACCOUNT CREATED!')
    I.wait(2)
  }
}
