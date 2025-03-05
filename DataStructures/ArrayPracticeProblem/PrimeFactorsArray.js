const prompt = require("prompt-sync")(); 
let n = parseInt(prompt("Enter a Number:"))

// Initializing array
let arr = new Array();

// Function to check if number is prime
let isPrime = function(num) {
    for(let i=2;i<num;i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

// Printing the prime numbers in range
for(let i=1;i<=n;i++){
    if(isPrime(i)){
        arr.push(i);
    }
}

console.log(arr)