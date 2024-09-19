//1. ******************************** ********************************
// First polyfill example

// Array.prototype.avinash = () => {
//     console.log("Avinash is available");
// }

// ******************************** ********************************


//2. ******************************** ********************************
//Polyfill of map - just tried to craate a random solution

// Array.prototype.map = () => {
//     const ans = [];
//     for (let i = 0; i < arr.length; i++) {
//         ans.push(arr[i]);
//     }

//     return ans;
// };
// ******************************** ********************************

//3 ******************************** ********************************
// Polyfill for Array.prototype.map

// if (!Array.prototype.map) {
//   Array.prototype.map = function (callback, thisArg) {
//     if (typeof callback !== 'function') {
//       throw new TypeError(callback + ' is not a function');
//     }

//     var newArray = [];
//     var arrayLength = this.length;
//     for (var i = 0; i < arrayLength; i++) {
//       if (i in this) {
//         var mappedValue = callback.call(thisArg, this[i], i, this);
//         newArray[i] = mappedValue;
//       }
//     }

//     return newArray;
//   };
// }

// // Usage of the polyfill
// var numbers = [1, 2, 3, 4, 5];

// var squaredNumbers = numbers.map(function (num) {
//   return num * num;
// });

// console.log(squaredNumbers);

// ****************************************************************


//***************************************************************************
//4Another solution of map poylfill

Array.prototype.map = function(callBackFunction){
    const output = [];
    this.forEach((element, index) => {
        output.push(callBackFunction(element));
    });
    return output;
};

console.log([10, 20, 30, 40, 50].map((ele) => ele * 10));

// ******************************************************************************


