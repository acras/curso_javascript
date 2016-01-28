var getName=(function(){
  var names=['Bill Gates', 'Steve Jobs', 'Steve Wozniak', 'Martin Fowler',
             'David Heinemeire Hansson'];
  return function(i){
    return names[i];
  }
}());

console.log(getName(3))
