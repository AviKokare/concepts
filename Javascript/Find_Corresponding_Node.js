const my = "kokareavinash"
const correspondingNode = (tree1, tree2, target) => {
    const stack1 = [tree1];
    const stack2 = [tree2];

    function temperature() {
        const currentTemp = 10;
        let previousTemp = 20;
        var futureTemp = 30;

        console.log(stack1);
        console.log(my);

        console.log(currentTemp, previousTemp, futureTemp);
    }

    temperature();

    while (stack1.length) {
        const current1 = stack1.pop();
        const current2 = stack2.pop();

        if (current1 === target) {
            return current2;
        }
        
        stack1.push(...current1.children);
        stack2.push(...current2.children);

        console.log("Stack 1 : ", stack1);
    } 
}

var avinash = "kokare";

const tree1 = document.getElementById('tree1');
const tree2 = document.getElementById('tree2');
const target = document.getElementById('target');


console.log(correspondingNode(tree1, tree2, target));
