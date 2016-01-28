function constructorClassA(p1){
  var instance = new Object();
  var privateVar = 100; //variável private
  instance.minhaFuncao = function (){
    //esta função pode ser herdada e possui
    //acesso à privateVar
  }
  return instance;
}

function constructorClassB(p1){
  var instance = constructorClassA(p1);
  instance.outraFuncao = function (){
    //função declarada na classe herdeira
  }

  var oldMinhaFuncao = instance.minhaFuncao
  instance.minhaFuncao = function(){
    oldMinhaFuncao()
    //fazer o que eu quero
  }


  return instance;
}
