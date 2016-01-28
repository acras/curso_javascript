try{
  console.log('Dentro do bloco principal')
  throw new Error('Isto é um erro')
}
catch(e){
  console.log('Deu problema: ' + e)
}
finally{
  console.log('Sempre executa')
}
