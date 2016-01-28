//Este exemplo mostra como usar closures para implementar uma função
//que executa algum método de um objeto depois de um determinado número
//de milisegundos. Ela coloca em todos os objetos uma função chamada later
//que irá utilizar o setTimeout para executar tardiamente qualquer função
//daquele objeto.

if (typeof Object.prototype.later !== 'function'){
  Object.prototype.later = function(msec, method){
    var args=Array.prototype.slice.apply(arguments, [2]);
    if (typeof method==='string'){
      method=this[method];
    }
    setTimeout(function(){
      method.apply(this, args)
    }, msec);
    return this; //para poder chamar em cascata
  }
}


obj = {
  f1: function(){
    console.log('primeira');
  },
  f2: function(){
    console.log('segunda');
  },
  f3: function(){
    console.log('terceira');
  }
}

obj.later(1000, 'f1').
    later(2000, 'f2').
    later(3000, 'f3');
