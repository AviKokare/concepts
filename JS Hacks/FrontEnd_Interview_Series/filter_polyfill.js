Array.prototype.filter = function(callbackFunction){
    const ans = [];
    this.forEach((ele, ind) => {
        if(callbackFunction(ele)) ans.push(ele);
    });
    return ans;
};

const number = [10, 43, 66, 34.78, 89];

const output = number.filter((num) => {
    return num > 50;
});
console.log(output);
