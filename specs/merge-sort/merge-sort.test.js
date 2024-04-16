/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // code goes here
  if (nums.length < 2) {
    return nums;
  }

  return merge(mergeSort(nums.splice(0, nums.length / 2)), mergeSort(nums));
};

const merge = (firstArray, secondArray) => {
  let finalArray = [];

  while (firstArray.length && secondArray.length) {
    if (firstArray[0] <= secondArray[0]) {
      finalArray.push(firstArray.shift());
    }
    else {
      finalArray.push(secondArray.shift())
    }
  }

  return finalArray.concat(firstArray, secondArray);
}

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
