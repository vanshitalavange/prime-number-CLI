var readlineSync = require('readline-sync');
console.log("Check if a number is prime or not 👇")
var number = readlineSync.question('Enter a number : ');
function isPrime(number){
  var flag = 0;
  if(number === 1 || number === 0){
  flag = 1;
  }
  else if(number === 2){
  flag = 2;
  }
  else if(number>1){
    for(let i=2;i<number;i++){
     if(number%i === 0){
       flag = 3;
       break;
     }else{
       flag = 2;
     }
    }
  } 
  return flag;
}
function displayResult(){
  var flag = isPrime(Number(number));
  if(flag === 0){
    console.log("Please enter valid input");
  }
  if(flag === 1){
    console.log(number+" is neither prime nor composite");
  }
  if(flag === 2){
    console.log(number+" is a prime number");
  }
  if(flag === 3){
    console.log(number+" is not a prime number");
  }
}

console.log(displayResult());
