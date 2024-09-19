// curried function that accepts 5 arguments and returns the sum of them.

const ARGS_LEN = 5;

const sum = (...args) => {
    if (args.length === ARGS_LEN) {
        return args.reduce((currentVal, nextVal) => currentVal + nextVal, 0);
    } else {
        const recursiveFunction = (...args2) => {
            args = args.concat(args2);
            if (args.length === ARGS_LEN) {
                return args.reduce((currentVal, nextVal) => currentVal + nextVal, 0);
            } else {
                return recursiveFunction;
            }
        }
        return recursiveFunction;
    }
};

const res = sum(1)(2)(3)(4)(5);
console.log(res)