// for both exercises, the id of the object you're searching for is given to you
// as integer. return the whole object that you're looking for
//
// it's up to you what to return if the object isn't found (we're not testing that)

function linearSearch(id, array) {
  // code goes here
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return array[i];
    }
  }
  return 'ID not found';
}

function binarySearch(id, array) {
  // code goes here
  let i = 0;

  while (array.length > 1) {
    i += 1;
  let middleOfArray = Math.floor(array.length / 2);
  let middleElement = array[middleOfArray];
  let splittedArray;

  if (id === middleElement.id) {
    return middleElement;
  }

  // Go left if the id is greater than the middle of array otherwise, go right.
  if (id > middleOfArray.id) {
    splittedArray = array.splice(0, middleOfArray)
  } else {
    splittedArray = array.splice(middleOfArray);
  }
  array = splittedArray;
}

return 'Element not found';
}

// unit tests
// do not modify the below code
test.skip("linear search", function () {
  const lookingFor = { id: 5, name: "Brian" };
  expect(
    linearSearch(5, [
      { id: 1, name: "Sam" },
      { id: 11, name: "Sarah" },
      { id: 21, name: "John" },
      { id: 10, name: "Burke" },
      { id: 13, name: "Simona" },
      { id: 31, name: "Asim" },
      { id: 6, name: "Niki" },
      { id: 19, name: "Aysegul" },
      { id: 25, name: "Kyle" },
      { id: 18, name: "Jem" },
      { id: 2, name: "Marc" },
      { id: 51, name: "Chris" },
      lookingFor,
      { id: 14, name: "Ben" }
    ])
  ).toBe(lookingFor);
});

test("binary search", function () {
  const lookingFor = { id: 23, name: "Brian" };
  expect(
    binarySearch(23, [
      { id: 1, name: "Sam" },
      { id: 3, name: "Sarah" },
      { id: 5, name: "John" },
      { id: 6, name: "Burke" },
      { id: 10, name: "Simona" },
      { id: 12, name: "Asim" },
      { id: 13, name: "Niki" },
      { id: 15, name: "Aysegul" },
      { id: 17, name: "Kyle" },
      { id: 18, name: "Jem" },
      { id: 19, name: "Marc" },
      { id: 21, name: "Chris" },
      lookingFor,
      { id: 24, name: "Ben" }
    ])
  ).toBe(lookingFor);
});
