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
        Salary: {
            base: "10000",
            bonus: "30000",
            stocks: "2000",
            other: {
                bonus: 100
            }
        }
    },
    Gender: "Male"
}

var {name, Job: {Salary:{base}}} = obj1

//console.log(name);
//console.log(newJob);
//console.log(Salary);
console.log(base);

//https://dmitripavlutin.com/javascript-object-destructuring/#:~:text=The%20object%20destructuring%20is%20a,the%20property%20doesn%27t%20exist.