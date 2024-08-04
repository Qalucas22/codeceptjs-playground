const { generate , validate} = require('gerador-validador-cpf')  // estamos pegando dentro do pacote gerador-validador-cpf o metodo que chama generate

var cpf = generate({format:true})

console.log(cpf)
console.log(validate(cpf))