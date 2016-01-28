var acUtils = (function(){
  var oneInchInCm = 2.54
  var somePrivateFunc = function (a){
    //do something
  }
  return {
    inch2cm: function(inch){
      return inch*oneInchInCm
    },
    cm2inch: function(cm){
      return cm/oneInchInCm
    }
  }
}())

console.log('2,54 cm = ' + acUtils.cm2inch(2.54) + ' inches');
console.log('12 inches = ' + acUtils.inch2cm(12) + 'cm');
