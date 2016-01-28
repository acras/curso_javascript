var Pluralizador = {};
(function(){
  var dicionario = {}
  Pluralizador.adicionaExcecao = function(singular, plural){
    dicionario[singular] = plural
  }
  var pluralizar = function(){
    if (dicionario[this])
      return dicionario[this]
    else
      return this + 's'
  }
  String.prototype.pluralizar = pluralizar
}())

console.log('casa'.pluralizar())
Pluralizador.adicionaExcecao('camarão', 'camarões')
console.log('camarão'.pluralizar())
