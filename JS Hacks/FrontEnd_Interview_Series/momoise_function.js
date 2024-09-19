// Memoise function in javascript
function memoize(func) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        const result = func.apply(this, args);
        cache[key] = result;
        return result;
    };
}

function expensiveFunction(n) {
  console.log(`Computing result for ${n}...`);
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

// Example to add number
// const memoizedExpensiveFunction = memoize(expensiveFunction);
// console.log(memoizedExpensiveFunction(5));  // Computation is performed

//Example to get factorial of a number
const getTheFactorialOfNumber = (x) => {
    if (x === 0) return 1;
    else return x * factorial(x-1);
}
const factorial = memoize(getTheFactorialOfNumber)
console.log(factorial(5)); // Computation is performed
console.log(factorial(6)); // Computation is performed

// console.log(memoizedExpensiveFunction(5));  // Result is retrieved from cache
// console.log(memoizedExpensiveFunction(10)); // Computation is performed
// console.log(memoizedExpensiveFunction(10)); // Result is retrieved from cache


/* ---------------- -------------------- -------------------- */
//Making aviansh as a closure to inner fucntion

// function memoize(func) {
//   const cache = {};
// const sz= "m"
//   function avinash() {
//     const a = "1";
//     var b = "2";
//     console.log(a + " " + b);
//       function ans() {
//           console.log(a + " " + b);
//         console.log(cache);
//       } // Reference cache variable from outer scope
//       ans();
//   }
//   avinash();
//   return function(...args) {
//       avinash();
//     const key = JSON.stringify(args);
//     console.log(key);

//     if (cache[key]) {
//       return cache[key];
//     }
//     const result = func.apply(this, args);
//     cache[key] = result;
//     return result;
//   };
// }

// function expensiveFunction(n) {
//   // Simulating a time-consuming computation
//   console.log(`Computing result for ${n}...`);
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     result += i;
//   }
//   return result;
// }

// const memoizedExpensiveFunction = memoize(expensiveFunction);

// console.log(memoizedExpensiveFunction(5, 10)); // Computation is performed
// console.log(memoizedExpensiveFunction(5)); // Result is retrieved from cache
// console.log(memoizedExpensiveFunction(10)); // Computation is performed
// console.log(memoizedExpensiveFunction(10)); // Result is retrieved from cache

/* ---------------- -------------------- -------------------- */

//Understand closure in very deep

// Niche wale example me khali avinash function ka hi closure banega because a and b are reffered inside the inner function. memoize ka nahi bana because sz is not reffered inside the inner function. Aur jitne variables reffred honge utne hi variables closure me rahenge

// function memoize() {
// const sz= "m"
//   function avinash() {
//     const a = "1";
//     var b = "2";
//     console.log(a + " " + b);
//       function ans() {
//           console.log(sz);
//           console.log(a);
//         console.log(cache);
//       } // Reference cache variable from outer scope
//       ans();
//   }
//   avinash();
//   }

// memoize();
