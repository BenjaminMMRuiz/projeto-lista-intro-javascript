// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui

  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
    //Escreva dentro da função calculaAreaRetangulo uma lógica que pede ao usuário a altura e a largura 
    //(nessa ordem) de um retângulo e imprime no console a área do retângulo.

    const altura = Number (prompt("Digite um numero:")) 
    const largura = Number (prompt("Digite um numero:")) 

    console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  //Escreva dentro da função imprimeIdade uma lógica que pede ao usuário 
  //o ano atual e seu ano de nascimento e imprima no console sua idade.

  const anoNascimento =  Number (prompt("Digite seu ano de nascimento:"))
  const anoAtual =  Number (prompt("Digite o ano atual:"))

  console.log(anoNascimento-anoAtual)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  //Escreva dentro da função calculaIMC uma lógica que 
  //recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea)
  return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  //Escreva dentro da função imprimeInformacoesUsuario uma lógica que 
  //pede ao usuário seu nome, sua idade e seu email (nessa ordem), 
  //e imprime no console uma mensagem como a seguinte:
const nome = prompt("Digite seu nome:")
const idade = prompt("Digite sua idade:")
const email = prompt("Digite seu email:")
  
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  //Escreva dentro da função imprimeTresCoresFavoritas uma lógica que pergunta 
  //ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores.
  let cor1 = prompt("Digite a primeira cor:")
  let cor2 = prompt("Digite a segunda cor:")
  let cor3 = prompt("Digite a terceira cor:")

  let resposta
  resposta=[cor1,cor2,cor3]
  console.log(resposta)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  //Escreva dentro da função retornaStringEmMaiuscula 
  //uma lógica que recebe uma string e retorna ela em letra maiúscula.
  

  return string.toUpperCase()
}
console.log(retornaStringEmMaiuscula("Benjamin"))

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  //Escreva dentro da função calculaIngressosEspetaculo uma lógica que recebe o custo de um espetáculo de teatro e o valor de cada ingresso (considere que todos os ingressos têm o mesmo preço) e 
  //retorna quantos ingressos precisam ser vendidos para que o espetáculo não dê prejuízo.

  const bilhete = custo / valorIngresso

return bilhete

} 
console.log(calculaIngressosEspetaculo(1, 2))

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  //Escreva dentro da função checaStringsMesmoTamanho uma lógica que 
  //recebe duas strings e retorna um booleano (true ou false) 
  //indicando se elas possuem o mesmo tamanho

  return string1.length === string2.length 
}
console.log(checaStringsMesmoTamanho("jose", "pedro"))

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  //Escreva dentro da função retornaPrimeiroElemento uma lógica que recebe um array e 
  //retorna o primeiro elemento.

  return array[0]
}

console.log(retornaPrimeiroElemento(""))

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  //Escreva dentro da função retornaUltimoElemento uma 
  //lógica que recebe um array e retorna o último elemento.

  return array[array.length -1]

}

console.log(retornaUltimoElemento("Bananinha"))

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  //Escreva dentro da função trocaPrimeiroEUltimo uma lógica que recebe um array e 
  //retorna um array com o primeiro e o último elemento trocados.

  const primeira = array[0]
  const segunda = array[array.length -1]
array[0] = segunda
array[array.length -1] = primeira

  return array

}

console.log (trocaPrimeiroEUltimo("Kibagunça"))


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  //Escreva dentro da função checaIgualdadeDesconsiderandoCase 
  //uma lógica que recebe duas strings e retorna um booleano 
  //(true ou false) indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.

 
 
    return string1.toLowerCase() === string2.toLowerCase();
  }

 console.log(checaIgualdadeDesconsiderandoCase)



// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  //Escreva dentro da função checaRenovacaoRG uma lógica que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nesta ordem). A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

  //* Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, também deve ser renovada).
  //* Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente /10 anos, também deve ser renovada).
  //* Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos

  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNascimento2 = Number(prompt("Digite o ano nascimento:"))
  const anoEmissaoCnh = Number(prompt("Digite o ano que a sua cnh foi emitida:"))
}

console.log(anoAtual)
console.log(anoNascimento2)
console.log(anoEmissaoCnh)



// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}