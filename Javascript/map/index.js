//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
console.log(array1); // 1,4,9,16

//<============ Map vs Foreach:===========

let arry = [1,2,3,4,5];

console.log(arry);

arry.forEach((x,i)=>{
    arry[i]=x *2;
});

console.log(arry); //arry got mututated by forEach

console.log(arry.map(t=>t*2));

console.log(arry);


let arry2 = [1,2,3,4,5];

arry2.forEach((x)=>{
    return x = x *2;
}); //this won't change anything since no element got replaced


console.log(arry2);