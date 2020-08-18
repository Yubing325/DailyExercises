// given an array, find if the largest number equal the sum of rest elements.

var array = [1,3,5,4,15,2]; //should output true


function ArraySum(array){
    //find the largest number in the array save to a temp variable e.g: t
        // order the array 
        array.sort((a,b)=>a-b);
        // find the last one i.e. the largest one & remove it from array
        var largest = array.pop();
    //calculate the sum of the rest, save the sum to tem variable t2
        let sum = 0;    
        array.forEach(element => {
            sum += element
        });
        
        console.log(sum);

    // check if t==t2
        return largest == sum;
}

ArraySum(array);