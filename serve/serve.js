// criando metodos e exportar para qualquer lugar do projeto.
module.exports = {
    bootstrap: function () {
        console.log('isso execultou antes do projeto todo')
    },
    
    teardown: function () {
        console.log('isso execultou depois do projeto todo')
    }
}
