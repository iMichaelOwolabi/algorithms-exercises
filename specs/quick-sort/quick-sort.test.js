/*

  Quick Sort!
  
  Name your function quickSort.
  
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

function quickSort(nums) {
  // code goes here
  if (nums.length < 2) {
    return nums;
  }

  // Get the pivot from the end ofthe list
  let pivot = nums.pop();
  let leftArray = [];
  let rightArray = [];

  // Compare every element of the array with the pivot and separate them into two groups of less than the pivot and greater than the pivot
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= pivot) {
      leftArray.push(nums[i]);
    } else {
      rightArray.push(nums[i]);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

// unit tests
// do not modify the below code
test("quickSort", function () {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);

  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
