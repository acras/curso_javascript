function a(){
  var varExterna = 1;
  return {
    getValue: function(){
      console.log(varExterna);
    },
    setValue: function(val){
      varExterna = val;
    }
  }
};

obj=a();
obj.getValue();
obj.setValue(4);
obj.getValue();
