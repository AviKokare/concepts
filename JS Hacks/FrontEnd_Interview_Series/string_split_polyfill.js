const splitPolyfill = (string, delimiter) => {
    if (delimiter === '') return Array.from(strt);
    const res = [];
    const startSplit = (str, i) => {
        if (i >= string.length) {
            return
        }
        const index = str.indexOf(delimiter);
        if (index >= 0) {
            res.push(str.substring(0, index));
            startSplit(str.substring(index + delimiter.length), index + delimiter.length);
        } else {
            res.push(str);
        }
    }

    startSplit(string, 0);

    return res;
}

console.log(splitPolyfill('I am avinash  to kokare.I want to be a good coder in my life. I would to achieve best position in my life.I', 'I'));