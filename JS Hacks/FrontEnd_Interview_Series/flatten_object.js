function flattenObject(obj, parent) {
    const finalObj = {};

    function genereteObject(obj, parent) {
        for (key in obj) {
            const newParent = parent + key;
            const value = obj[key];

            if (typeof value === 'object') { 
                genereteObject(value, newParent+".");
            } else {
                finalObj[newParent] = value;
            }
        }
    }
    genereteObject(obj, parent);

    return finalObj;
};

const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: [1,2]
        }
    }
}

console.log(flattenObject(obj, ""));