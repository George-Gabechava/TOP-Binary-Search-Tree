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
    console.log("unsorted", this.unsortedArray);

    // To insert value under root: Go Left if val smaller, Go right if val bigger.
    currentNode = root;

    while (true) {
      if (val > currentNode.root && currentNode.right == null) {
        // Insert to the right
        currentNode.right = Node(val);
        console.log("something inserted");
        break;
      }
      if (val > currentNode.root && currentNode.right != null) {
        // Go right
        currentNode = currentNode.right;
      }

      if (val < currentNode.root && currentNode.left == null) {
        // Insert to the left
        currentNode.left = Node(val);
        console.log("something inserted");
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

    // Find the location of the val
    parentNode = null;
    currentNode = root;
    while (true) {
      console.log("pathing", currentNode);
      if (val == currentNode.root) {
        // Value has been found.
        break;
      }
      if (val > currentNode.root) {
        // Go right
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
      if (val < currentNode.root) {
        // Go left
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
    }

    console.log("found", currentNode);
    console.log("parent", parentNode);

    // Find out if the value has children and a parent:
    if (parentNode) {
    // if not, just set value as null
      if (currentNode.left == null && currentNode.right == null) {
        parentNode.left == null;
        parentNode.right == null;
        return;
      }

      // if it has one, replace it with the child
      if (currentNode.left == null && currentNode.right != null) {
        parentNode == currentNode.right || currentNode.left;
        return;
      }

      if (currentNode.left != null && currentNode.right == null) {
        parentNode == currentNode.right || currentNode.left;
        return;
      }

      // if it has two, curse the gods, and do the following:
      if (currentNode.left != null && currentNode.right != null) {
        
        return;
      }
    }
  }

  return {
    root,
    insertValue,
    deleteValue
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
console.log(myTree);

myTree.insertValue(6);
console.log(myTree.root);

myTree.deleteValue(7);
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
