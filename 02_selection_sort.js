function findSmallest(arr) {
  let smallest = arr[0]; //It starts by assuming the first element of the array is the smallest
  let smallest_index = 0; //and sets its index to 0

  for (let i = 1; i < arr.length; i++) { //Loop Through Array: It then iterates through the rest of the array starting from the second element
    if (arr[i] < smallest) { //If the current element is smaller than the currently assumed smallest element it updates both the smallest value and its index
      smallest_index = i; //index
      smallest = arr[i]; //value
    }
  }

  return smallest_index //After checking every element, it returns the index of the smallest element found.
}

function selectionSort(arr) {
  let curr = arr.slice(0); // Copy Original Array: It creates a copy of the original array
  let newArr = []; // An empty array is initialized to store the sorted elements.

  //sorting process
  for (let i = 0; i < arr.length; i++) {
    let smallest_index = findSmallest(curr); //It finds the index of the smallest element in the remaining unsorted part of the copied array (curr) using the findSmallest function.
    newArr.push(curr[smallest_index]); //adds the smallest element to the beginning of the newArr.
    curr.splice(smallest_index, 1); // removes the smallest element from the curr array to continue with the next iteration.
  }
  return newArr; // Finally, after iterating through all elements, it returns the newArr, which contains the sorted elements of the original array.
}
let ans = selectionSort([5, 3, 1, 10])
console.log(ans)