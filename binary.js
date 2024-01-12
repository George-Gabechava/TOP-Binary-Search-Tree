function Node(data, leftValue, rightValue) {
  const root = data;
  const left = null;
  const right = null;

  return {root, left, right};
}

function Tree(array) {
  // Not sure what this function is for yet...
  const root = array;
}

function buildTree(array) {
  // Sort order and also remove duplicates.
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

function insertValue(val) {
  // code
}

function deleteValue(val) {
  // code
}

// let a = Node(3);
// console.log(a);

myArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let mySortedArray = sortArray(myArray);
console.log(mySortedArray);

myTree = buildTree(myArray);
console.log(myTree);