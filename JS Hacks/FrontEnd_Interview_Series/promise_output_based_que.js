// 1. Can multiple catch blocks we can make

// var p = new Promise((resolve, reject) => {
//     reject(new Error(`Cannot resolve`));
// })

// p.catch((error) => console.log(error));
// p.catch((error) => console.log(error));
// p.catch((error) => console.log(error));
// p.catch((error) => console.log(error));

//2. 
// Catch block will catch the errro and it does not returns anything so in the then block it will not receive anything, That's why it is printing undefined
// var p = new Promise((resolve, reject) => { 
//     reject(new Error("Failed to connect to server"));
// });

// p.catch((error) => console.log(error)).then(res => console.log(`res : ${res}`));

//3.
// In the below code, catch block returns something, that is the reason then block prints "actually, that worked"
// new Promise((resolve, reject) => { 
//     resolve("Success!");
// }).then(() => {
//     throw Error("Error");
// }).catch((error) => {
//     return "actually, that worked";
// }).then((message) => {
//     console.log(message);``
// })

//4.
// new Promise((resolve, reject) => resolve("Resolving the promise"))
//     .then(res => res)
//     .then(res => {
//         console.log(res)
//         return "koakre"
//     })
//     .then(res => console.log(res));

//5.
// In the below example, finally statement not return anything, so last then block takes the value from thte previous then block.

const p = new Promise((resolve, reject) => resolve(2));

p.then(v => {
    console.log(v);
    return v * 2;
}).then(v => {
    console.log(v);
    return v * 2;
}).finally(v => {
    console.log(v, "finally");
    return v * 2;
}).then(v => {
    console.log(v, "final then");
})