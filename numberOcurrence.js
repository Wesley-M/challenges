/*
    Challenge: Based on a sorted list, count the occurences of a number in
    O(log(n)).

    -- Example

    input number: 3
            list: [1, 1, 2, 3, 3, 3, 3]
          output: 4
*/


function leftmostIndex(list, x, leftIndex, rightIndex, biggestIndex) {
  const middle = Math.floor((rightIndex + leftIndex) / 2)

  if (list[middle] === x) {
    biggestIndex = middle
  }

  if (rightIndex <= leftIndex) {
    return biggestIndex
  }

  if (list[middle] > x) {
    return leftmostIndex(list, x, leftIndex, middle - 1, biggestIndex)
  } else if (list[middle] < x) {
    return leftmostIndex(list, x, middle + 1, rightIndex, biggestIndex)
  } else {
    return leftmostIndex(list, x, leftIndex, middle - 1, middle)
  }
}

function rightmostIndex(list, x, leftIndex, rightIndex, biggestIndex) {
  const middle = Math.floor((rightIndex + leftIndex) / 2)

  if (list[middle] === x) {
    biggestIndex = middle
  }

  if (rightIndex <= leftIndex) {
    return biggestIndex
  }

  if (list[middle] > x) {
    return rightmostIndex(list, x, leftIndex, middle - 1, biggestIndex)
  } else if (list[middle] < x) {
    return rightmostIndex(list, x, middle + 1, rightIndex, biggestIndex)
  } else {
    return rightmostIndex(list, x, middle + 1, rightIndex, middle)
  }
}

function countNumberOcurrence(x) {
  return (
      rightmostIndex(list, x, 0, list.length - 1, 0) -
      leftmostIndex(list, x, 0, list.length - 1, 0) + 1);
}

/*  TESTING SECTION  */

function check(fstValue, sndValue) {
    return (fstValue === sndValue) ? "Ok!" : "Test failed!"
}

let list = [1, 2, 3, 3, 3, 4, 5, 5]

console.log(check(countNumberOcurrence(1), 1))
console.log(check(countNumberOcurrence(2), 1))
console.log(check(countNumberOcurrence(3), 3))
console.log(check(countNumberOcurrence(4), 1))
console.log(check(countNumberOcurrence(5), 2))