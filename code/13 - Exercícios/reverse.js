var reverse = function(){
  res = ''
  for(i=0;i<this.length;i++)
    res += this[this.length - 1 - i]
  return res
}

if (!String.prototype.reverse)
  String.prototype.reverse = reverse


console.log('Ricardo Acras'.reverse())
