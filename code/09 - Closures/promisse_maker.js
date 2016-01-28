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
      foreach(function (f){
        try {
          f(value);
        } catch(ignore) {}
    });
    successFuncList = null;
    failureFuncList = null;
  }
  return {
    done: function(func){
      vouch('completed', func);
    },
    fail: function(func){
      vouch('failed', func);
    },
    complete: function(value){
      resolve('completed', value);
    },
    smash: function(reason){
      resolve('failed', reason)
    },
    status: function(){
      return status;
    }
  }
}

p = make_promise().done(function(v) {console.log(v)});
