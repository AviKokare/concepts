Array.prototype.reduce = function (call) {
    let currentSum = 10;

    this.forEach(function (ele) {
        currentSum = call(currentSum, ele);
    });

    console.log(currentSum);
};

const myArray = [1, 2, 3, 4, 5];

const addFun = function (currentSum, currentElement) {
    return currentSum + currentElement;
};

myArray.reduce(addFun);

const a = [1, 2, 3, 4, 5];

const ans = a.reduce((acc, ele) => {
    return acc + ele;
}, 0);

console.log(ans);


//**********************************************************************************

//caback function takes -> previousValue, currentValue, index, and array as an argument

// function myReducer(callbackFunction, initialValue) {
//     if (!this) throw new Error("Array not defined");

//     let array = this;
//     let index = 0;
//     let accumulator = 0;

//     if (!array.length) {
//         if (initialValue) return initialValue;
//         else throw new Error("Array is empty");
//     }

//     if (initialValue) {
//         accumulator = initialValue;
//     } else {
//         accumulator = array[index++]; 
//     }

//     while (index < array.length) {
//         accumulator = callbackFunction(accumulator, array[index], index, array);
//         index++;
//     }

//     return accumulator;
// };

// Array.prototype.reduce = myReducer;

// const myarray = [1, 2, 3, 4, 5];
// const initialValue = 1;

// const callback = (accumulator, currentValue, index, array) => accumulator + currentValue;

// console.log(myarray.reduce(callback, initialValue));



