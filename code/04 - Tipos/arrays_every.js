a = [1,2,3,-1,4,5,9]
b = [1,43,7,5,32,65,76]

function positivo(n){
  return n > 0
}

console.log(a.every(positivo)) //false
console.log(b.every(function(n){
  return n > 0
})) //true
