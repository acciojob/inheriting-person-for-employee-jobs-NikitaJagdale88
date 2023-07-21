// complete this js code
function Person(name, age) {
	 this.name = name;
      this.age = age;
}
// Adding the greet method to the Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Constructor function for Employee
function Employee(name, age, jobTitle) {
  // Call the parent constructor (Person) with the provided name and age
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit the Person prototype into the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Set the constructor of Employee back to Employee (because it got overwritten by Object.create)
Employee.prototype.constructor = Employee;

// Adding the jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function () {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
