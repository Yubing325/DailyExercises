//Function Constructor
// factory function:
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};


// function constructor:
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        let thisYear = new Date().getFullYear();
        console.log(thisYear - yearOfBirth)
    }    
}

var Bob = new Person('Bob', 1992, 'sales');
var jane = new Person('Jane', 1998, 'Student');
var Pink = new Person('Pink', 1987, 'dealer');



Bob.calculateAge();
jane.calculateAge();
Pink.calculateAge();

// https://stackoverflow.com/questions/8698726/constructor-function-vs-factory-functions#:~:text=A%20constructor%20returns%20an%20instance,has%20a%20large%20setup%20process.


Person.prototype.gender = 'male';

console.log(jane.gender);