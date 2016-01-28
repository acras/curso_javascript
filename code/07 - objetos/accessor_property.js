var my_object = {mm: 10}

var mm2inch = function(){
  return this.mm / 25.4;
}

var inch2mm = function(value){
  this.mm = value * 25.4;
}


Object.defineProperty(my_object,
  'inch', {
    get: mm2inch,
    set: inch2mm
  });

console.log('mm: ' + my_object.mm + ', inches: ' + my_object.inch);

my_object.inch = 100

console.log('mm: ' + my_object.mm + ', inches: ' + my_object.inch);
