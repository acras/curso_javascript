var make_promise = function(){
  var status = 'unfinished',
      result,
      successFuncList = [],
      failureFuncList = []
  function vouch(finalStatus, f){
    switch (status){
      case 'unfinished':
        (finalStatus === 'completed' ? successFuncList : failureFuncList).
          push(f);
        break;
      case finalStatus:
        f(result)
    }
  }
  function resolve(finalStatus, value){
    if (status !== 'unfinished'){
      throw new Error('Já finalizado.');
    }
    status = finalStatus;
    result = value;
    (finalStatus === 'completed' ? successFuncList : failureFuncList).
      forEach(function (f){
        try {
          f(value);
        } catch(ignore) {}
    });
    successFuncList = null;
    failureFuncList = null;
  }
  function complete (value){
    resolve('completed', value);
  }
  function smash(reason){
    resolve('failed', reason);
  }
  var obj = {};
  obj.done = function(func){
    vouch('completed', func);
    return obj;
  };
  obj.fail = function(func){
    vouch('failed', func);
    return obj;
  };
  obj.status = function(){
    return status;
  }
  //simular uma execução qualquer
  fail = Math.floor(Math.random()*100) > 50; //50% de probabilidade de falhar
  timeout = Math.floor(Math.random()*3000); //timeout entre 0 e 3 segundos
  if (fail){
    setTimeout(function(){smash('Falhou e não sei por quê!')}, timeout);
  }else{
    var res = Math.floor(Math.random()*100000); //resultado entre 0 e 100000
    setTimeout(function(){complete(res)}, timeout);
  }
  return obj;
}

make_promise().
  done((function (v) {
    console.log('Execução completou com sucesso e retornou o valor: ' + v)})
  ).
  fail((function (v) {
    console.log('Execução falhou e retornou o motivo: ' + v)})
  );

console.log('Chamado o make_promise!')
