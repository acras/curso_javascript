var imprimeManifesto = function(){
  console.log('****** Manifesto da ' + this.nomeDaClasseLegivel() + ' ' + this.nome + ' *******')
  this.astronautas.forEach(
    function (astronauta){
      console.log(astronauta.nome + ' - ' + astronauta.idadeLegivel())
    }
  )
}

/* Astronauta */
var Astronauta = function(nome, dataNascimento){
  this.nome = nome
  this.dataNascimento = dataNascimento
}

Astronauta.prototype.idadeEmDias = function(){
  var hoje = new Date()
  return Math.floor((hoje - this.dataNascimento)/(1000*24*60*60))
}

Astronauta.prototype.idadeLegivel = function(){
  return Math.floor(this.idadeEmDias() / 365) + ' anos'
}

/* Missao */

var Missao = function(nome){
  this.nome = nome
  this.astronautas = []
}

Missao.prototype.adicionaAstronauta = function(){
  var args = Array.prototype.slice.call(arguments);
  this.astronautas = this.astronautas.concat(args)
}

Missao.prototype.idadeMedia = function(){
  var idadeTotal = this.astronautas.reduce(
    function (total, astronauta){
      return total + astronauta.idadeEmDias()
    }, 0
  )
  return idadeTotal / this.astronautas.length
}

Missao.prototype.nomeDaClasseLegivel = function(){
  return 'Missão'
}

Missao.prototype.manifesto = imprimeManifesto

/* Estação Espacial */

var EstacaoEspacial = function(nome, localizacao){
  this.nome = nome
  this.localizacao = localizacao
  this.astronautas = []
}

EstacaoEspacial.prototype.nomeDaClasseLegivel = function() {
  return 'Estação Espacial'
}

EstacaoEspacial.prototype.adicionaAstronauta = Missao.prototype.adicionaAstronauta
EstacaoEspacial.prototype.idadeMedia = Missao.prototype.idadeMedia
EstacaoEspacial.prototype.manifesto = imprimeManifesto


a = new Astronauta('Neil Armstrong', new Date(1930, 7, 23))
a2 = new Astronauta('Buzz Audrin', new Date(1930, 0, 23))


ee = new EstacaoEspacial('Estação Espacial Internacional', 'Lua')
ee.adicionaAstronauta(a, a2)

ee.manifesto()
