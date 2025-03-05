// Initializing array
let arr = new Array();

// Storing random numbers in array
for(let i=0;i<10;i++){
    arr.push(Math.floor(Math.random()*900) + 100);
}

console.log(arr)

let max = Number.MIN_VALUE;
let secMax = 0;
let min = Number.MAX_VALUE;
let secMin = 0;

for(let i=0;i<arr.length;i++){
    // Finding second largest
    if(arr[i] > max){
        secMax = max;
        max = arr[i];
    }
    // Finding second minimum
    if(arr[i] < min){
        secMin = min;
        min = arr[i];
    }
}

console.log("Second Maximum: ",secMax)
console.log("Second Minimum: ",secMin)