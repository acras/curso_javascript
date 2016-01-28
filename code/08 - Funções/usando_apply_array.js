//Este é um exemplo de uso de apply para utilizar uma função
//de um objeto em outro. Neste exemplo usamos a função slice
//do objeto Array para fazer o slice de arguments de uma função
//que não é um Array, mas possui as características necessárias
//para aplicar o slice

function minhaFuncao(){

  arr = Array.prototype.slice(1)

  arr = Array.prototype.slice.call(arguments, 1); 
  console.log(arr)
}

minhaFuncao(1,2,3,4)
