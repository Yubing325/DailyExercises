nums = [0,10,4,9,123,54,1];

nums.sort();

console.log(nums);

let some = new Array(10).fill(null);

console.log(some);

some = some.map( 
        () => (Math.floor(Math.random()*200)+1)
    );
console.log(some);

some.sort();

console.log(some);

some.sort((a,b)=> a - b);

console.log(some);

some.sort((a,b)=> b - a);

console.log(some);