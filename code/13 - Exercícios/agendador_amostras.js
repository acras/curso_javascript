var inicia_lote = function(){
  var AGUARDANDO = 'aguardando'
  var FINALIZADO = 'finalizado'
  var status = AGUARDANDO
  var instance = new Object()
  
  setTimeout(finalizarProcessamento, 120000)
  return instance
}
