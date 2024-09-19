//Currying Functions return sum of previous values

const prevSum = () => {
    let prevSum = 0;
    return (nextVal) => {
        prevSum += nextVal;
        return prevSum;
    }
};

const sum = prevSum();
console.log(sum(1));
console.log(sum(4));