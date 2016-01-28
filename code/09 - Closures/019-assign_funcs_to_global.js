var ACRAS = {}; //provavelmente estaria declarado em outro lugar

(function(){
  var oneInchInCm = 2.54
  var somePrivateFunc = function (a){
    //do something
  }
  ACRAS.inch2cm = function(inch){
    return inch*oneInchInCm
  };
  ACRAS.cm2inch = function(cm){
    return cm/oneInchInCm
  };
}())

console.log('2,54 cm = ' + ACRAS.cm2inch(2.54) + ' inches');
console.log('12 inches = ' + ACRAS.inch2cm(12) + 'cm');
