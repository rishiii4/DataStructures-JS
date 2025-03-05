// Initializing array
let arr = new Array();

// Storing repeated values in array
for(let i=0;i<=100;i++){
    let num = i.toString();
    if(num.length === 2 && num[0] === num[1]){
        arr.push(i)
    }
}

console.log(arr)