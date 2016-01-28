'use strict'
var obj = Object.create({
  maisDeFora: function (){
    //var that=this;
    console.log('---this fora--------')
    console.log(this)
    var that = this
    var maisDeDentro = function (){
      console.log('---this------------');
      console.log(this);
      console.log('---that------------');
      console.log(that);
    }
    maisDeDentro();
  }
})
obj.maisDeFora();
