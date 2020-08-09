array1 = [1,2,3,4,5,6];
//test code runer extension
//console.log(array1);

[a,b, ...some] = array1

//console.log(a);
//console.log(some);

obj1= {
    "name": "Paul",
    DOB: "1993-12-01",
    Job:{
        title: "Dr",
        Company: "Microsoft",
        Salary: "13000"
    },
    Gender: "Male"
}

var {name, DOB: birthDate, "Job": newJob} = obj1

console.log(name);
console.log(newJob);