var make_promise = function(){
  var status = 'unfinished',
    result,
    doneFuncList = [],
    failFuncList = []

  function vouch(finalStatus, f){
    if (finalStatus === status)
      f();
    if (status === 'unfinished'){
      if (finalStatus === 'done')
        doneFuncList.push(f);
      if (finalStatus === 'fail')
        failFuncList.push(f);
    }
  }

  function resolve(finalStatus){
    if (status !== 'unfinished')
      throw new Error('Processamento já finalizado')
    status = finalStatus
    if (finalStatus === 'done'){
      for (i=0;i<doneFuncList.length;i++)
        doneFuncList[i]()
    }
    if (finalStatus === 'fail'){
      for (i=0;i<failFuncList.length;i++)
        failFuncList[i]()
    }
  }

  var resolveDone = function(){
    resolve('done')
  }

  var resolveFail = function(){
    resolve('fail')
  }

  var obj = {}
  obj.done = function(f){
    vouch('done', f)
    return obj
  }
  obj.fail = function(f){
    vouch('fail', f)
    return obj
  }

  setTimeout(resolveDone, 2000)

  return obj;
}



var doneHandler = function(){
  console.log('Deu certo!')
}

var failHandler = function(){
  console.log('Deu erro!')
}

var p = make_promise().
  done(doneHandler).
  done(doneHandler).
  fail(failHandler)


p.done(doneHandler)








