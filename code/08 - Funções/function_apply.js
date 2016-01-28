var minhaFuncao = function(){
  console.log(arguments);
}

//this=null e 5 parâmetros numéricos
minhaFuncao.apply(null, [1,2,3,4,5]);
//this=undefined e 5 parâmetros numéricos
minhaFuncao.call(undefined,1,2,3,4,5);
