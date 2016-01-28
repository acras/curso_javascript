var ClasseA = function(){}
ClasseA.prototype.fazUmaCoisa = function(){
  console.log('Fiz uma coisa na classe A')
}

var ClasseB = function(){}
ClasseB.prototype = new ClasseA()
ClasseB.prototype.fazOutraCoisa = function(){
  console.log('Fiz outra coisa na classe B')
}
ClasseB.prototype.fazUmaCoisa = function(){
  ClasseA.prototype.fazUmaCoisa.call(this)
  console.log('     e complementei com uma coisa da classe B')
}

a = new ClasseA()
a.fazUmaCoisa()

b = new ClasseB()
b.fazOutraCoisa()
b.fazUmaCoisa()
