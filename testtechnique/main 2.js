for(let i = 1; i <= 200; i++){
  if(i % 5 == 0 && i % 7 == 0){
    console.log('Hello World')
  }
  else if(i % 5 == 0){
    console.log('Hello')
  } else if(i % 7 == 0){
    console.log('World')
  }else {
    console.log(i)
  }
}