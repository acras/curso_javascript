fac = (x) ->
  if x==1
    return 1
  else
    return x * fac(x-1)

console.log(fac(10))
