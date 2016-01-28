var testa = function(val){
  return (this.valorMinimo < val) && (this.valorMaximo > val)
}

var ValorReferencia = function(valorMinimo, valorMaximo){
  this.valorMinimo = valorMinimo
  this.valorMaximo = valorMaximo
}

ValorReferencia.prototype.testaValRef = testa

vr = new ValorReferencia(10, 100)
console.log(vr.testaValRef(9))
console.log(vr.testaValRef(70))
console.log(vr.testaValRef(130))

var outroExame = {valorMinimo: 200, valorMaximo: 900}
console.log(testa.call(outroExame, 130))
console.log(testa.call(outroExame, 230))
console.log(testa.call(outroExame, 1000))
