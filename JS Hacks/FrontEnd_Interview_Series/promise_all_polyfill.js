// const dummyAPI = (time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(time);
//         }, time);
//     })
// };


// const taskArray = [dummyAPI(1000), dummyAPI(2000), dummyAPI(3000)];
// const polyfillOfPromiseAll = (taskArray) => {
//     const output = [];
//     return new Promise((resolve, reject) => { 
//         taskArray.forEach((promise, index) => {
//             promise.then(data => {
//                 console.log("My data is : ", data);
//                 output[index] = data;
//                 if (index === taskArray.length - 1) {
//                     resolve(output);
//                 }
//             }).catch((err) => {
//                 console.error(`err : `, err);
//                 reject(err);
//             });
//         })
//     })
// };

// polyfillOfPromiseAll(taskArray).then(result => console.log(result)).catch((err) => console.error(err));

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve('Result 1'), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve('Result 2'), 2000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve('Result 3'), 1500);
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log('All promises resolved:', results);
  })
  .catch((error) => {
    console.error('One or more promises rejected:', error);
  });
