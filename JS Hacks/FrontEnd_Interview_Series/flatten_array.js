// Solution 1
let ans = []
function flattenArray_1(args) {
    args.forEach(function (ele) {
        if (!Array.isArray(ele)) {
            ans.push(ele);
        } else {
            return flattenArray_1(ele);
        }
    })
    return ans;
}

console.log(flattenArray_1([[10, 23, [[50, 56,], [[[[[[[[60], 98, 3434]]]]]]], [87, 78]]], 1, 2, 3, [4, 5]]));


//Solution 2

function flattenArray_2(arr) {
    return arr.reduce((prevVal, curreVal) => {
        if (Array.isArray(curreVal)) {
            prevVal = prevVal.concat(flattenArray_2(curreVal));
        } else {
            prevVal = prevVal.concat(curreVal);
        }
        return prevVal;
    }, []);
};

console.log(flattenArray_2([[10, 23, [[50, 56,], [[[[[[[[60], 98, 3434]]]]]]], [87, 78]]], 1, 2, 3, [4, 5]]));