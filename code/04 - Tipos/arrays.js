a = []
a[4] = 4
a[1] = 1

console.log('for normal')

for (i=1;i<5;i++){
  console.log(a[i]);
}

//1
//undefined
//undefined
//4

console.log('')
console.log('for in')

for (i in a)
  console.log(i)
