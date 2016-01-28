a = [1,2,3,-1,19,5,9]

function soma(total, item, idx, arr){
  console.log('-----' + idx)
  console.log('  total: ' + total)
  console.log('  item: ' + item)
  console.log('  idx: ' + idx)
  console.log('  arr: ' + arr)
  return total + item
}

console.log(a.reduce(soma, 1))
