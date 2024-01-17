function Node(data, leftValue, rightValue) {
  const root = data;
  const left = null;
  const right = null;

  return {root, left, right};
}

function Tree(array) {
  // Not sure what this function is for yet...
  this.sortedArray = sortArray(array);
  this.unsortedArray = array;

  let root = null;
  if(array) root = this.buildTree(this.sortedArray);

  const insertValue = (val) => {
    // code should check for duplicates then do an insert, but where?
    if (unsortedArray.includes(val)) {
      throw new Error("Value already exists in array.");
    }
    // Add value to an array
    unsortedArray.push(val);  

    // To insert value under root: Go Left if val smaller, Go right if val bigger.
    currentNode = root;

    while (true) {
      if (val > currentNode.root && currentNode.right == null) {
        // Insert to the right
        currentNode.right = Node(val);
        break;
      }
      if (val > currentNode.root && currentNode.right != null) {
        // Go right
        currentNode = currentNode.right;
      }

      if (val < currentNode.root && currentNode.left == null) {
        // Insert to the left
        currentNode.left = Node(val);
        break;
      }
      if (val < currentNode.root && currentNode.left != null) {
        // Go left
        currentNode = currentNode.left;
      }
    }
  }

  const deleteValue = (val) => {
    // First find if val exists
    if (!this.unsortedArray.includes(val)) {
      throw new Error("Value does not exist in array");
    }

    // Remove value from array
    let indexSlice = this.unsortedArray.indexOf(val);
    let array1 = this.unsortedArray.slice(0,indexSlice);
    let array2 = this.unsortedArray.slice(indexSlice+1);
    this.unsortedArray = array1.concat(array2);

    // Find the location of the val
    let parentNode = null;
    let toReplaceNode = null;
    currentNode = root;
    while (true) {
      if (val == currentNode.root) {
        // Value has been found.
        break;
      }
      if (val > currentNode.root) {
        // Go right
        parentNode = currentNode;
        currentNode = currentNode.right;
        toReplaceNode = parentNode.right;
      }
      if (val < currentNode.root) {
        // Go left
        parentNode = currentNode;
        currentNode = currentNode.left;
        toReplaceNode = parentNode.left;
      }
    }
    // Find out if the value has children:
    // if not, just set value as null
    if (currentNode.left == null && currentNode.right == null) {
      parentNode.left = null;
      parentNode.right = null;
      return;
    }

    // if it has one, replace it with the child
    if (currentNode.left == null && currentNode.right != null) {
      tmp = currentNode.right;
      currentNode.right = null;
      parentNode.left = tmp;
      return;
    }
    if (currentNode.left != null && currentNode.right == null) {
      tmp = currentNode.left;
      currentNode.left = null;
      toReplaceNode = tmp;
      return;
    }

    // if it has two, we want next biggest, so:
    // (Might need recursion?)
    if (currentNode.left != null && currentNode.right != null) {
      console.log("Helloooo?");
      let nodeToReplace = currentNode;
      // Go right once
      currentNode = currentNode.right;
      // Keep going left until you can't anymore
      while (currentNode.left) {
        currentNode = currentNode.left;
      }
      // Need to bring this node up and also make it's parent.left node null  
      let tmp = currentNode.root;
      deleteValue(currentNode.root);  
      nodeToReplace.root = tmp;
      return;
    }
  }

  const find = (val) => {
    // Check if val is in BST array
    if (!this.unsortedArray.includes(val)) {
      throw new Error("Value does not exist in array");
    }
    // Search for val starting with root
    currentNode = root;
    while (true) {
      if (val == currentNode.root) {
        // Value has been found.
        return currentNode;
      }
      if (val > currentNode.root) {
        // Go right
        currentNode = currentNode.right;
      }
      if (val < currentNode.root) {
        // Go left
        currentNode = currentNode.left;
      }
    }
  }

  // Traverse the tree in breadth-first level order
  // May be implemented using either iteration or reursion
  // Should return an array of values if no callback is given as an argument
  // You may want to use an array acting as a queue to keep track of all the child nodes
  const levelOrder = (arg) => {
    
    
  }

  return {
    root,
    insertValue,
    deleteValue,
    find,
    levelOrder
  }
}


function buildTree(array) {
  let sortedArray = sortArray(array);
  // Build tree
  if (array.length == 0 || sortedArray[0] > sortedArray[1]) {
    return null;
  }

  let mid = parseInt(sortedArray.length / 2);
  let node = Node(sortedArray[mid]);
  
  // Recursive trees
  node.left = buildTree(sortedArray.slice(0, mid));

  node.right = buildTree(sortedArray.slice(mid+1));
  // Return level-0 root node
  return node;
}

function sortArray(array) {
  // Remove duplicates
  let noDupes = [];
  array.forEach(element => {
    if (!noDupes.includes(element)) {
    noDupes.push(element);
    }
  });
  // Sort array
  let sorted = noDupes.sort(function(a, b){return a - b});
  return sorted;
}

myArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let mySortedArray = sortArray(myArray);
console.log("mySorted", mySortedArray);

myTree = Tree(myArray);
// console.log(myTree);

// myTree.insertValue(6);
// console.log(myTree.root);

// myTree.deleteValue(4);
console.log("test", myTree.find(23));
console.log(myTree.root);

// Supposed to be visual tree
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
