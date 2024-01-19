import Tree from "./binary.js";

// 0 
// Make an array of length = n consiting of random numbers between 0 and 100:
function rand0100(n) {
    let randArray = [];
    for (let i = 0; i < n; i ++) {
        let randomNumber = Math.random();
        randomNumber = Math.round(randomNumber * 100);
        randArray.push(randomNumber);
    }
    return randArray;
}
// 1
let myArr = rand0100(7);
console.log("Current Random Array", myArr);
let myTree = Tree(myArr);

// 2
console.log("isBalanced 1", myTree.isBalanced());


// 3
console.log("levelOrder", myTree.levelOrder());
console.log("inOrder", myTree.inOrder());
console.log("preOrder", myTree.preOrder());
console.log("postOrder", myTree.postOrder());

// 4
myTree.insertValue(111);
myTree.insertValue(122);
myTree.insertValue(133);

// 5
console.log("isBalanced 2", myTree.isBalanced());

// 6
let rebalancedTree = myTree.rebalance();

// 7
console.log("isBalanced 3", rebalancedTree.isBalanced());

// 8
console.log("levelOrder", rebalancedTree.levelOrder());
console.log("inOrder", rebalancedTree.inOrder());
console.log("preOrder", rebalancedTree.preOrder());
console.log("postOrder", rebalancedTree.postOrder());
