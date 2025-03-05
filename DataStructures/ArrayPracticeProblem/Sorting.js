// Initializing array
let arr = new Array();

// Storing random numbers in array
for(let i=0;i<10;i++){
    arr.push(Math.floor(Math.random()*900) + 100);
}

// Sorting array
arr.sort();

console.log(arr)

let secLargest = arr[8];
console.log("Second Largest: ",secLargest);

let secSmallest = arr[1];
console.log("Second Smallest: ", secSmallest)