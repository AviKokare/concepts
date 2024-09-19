// 1. This refers to an Object

// 2. The value of this depends on how the function is invoked

// Behaviour of this in a Function: this refers to window object

// Behaviour of this in a Object: this refers to the object

// Arrow Functions: Arrow functions don’t have a defined this. Instead they treat it as a variable and they try to get the value lexically (inherit from parent scope)

//1
// const person = {
//     name: 'John',
//     getName: function() {
//         console.log(this.name + ' is my name');
//     }
// }

// console.log(person.getName());

//2
// const person = {
//     name: 'John',
//     getName: () => {
//         return this.name + ' is my name';
//     }
// }

// console.log(person.getName());

//3

function User() {
    this.name = 'John';
    this.age = 13;
    this.sayUser = function () {
        console.log('My name is : ', this.name);

        function innerFunction() {
            console.log('My name is : ', this.name);
        }

        innerFunction();
    }
};

const user = new User();

user.sayUser();