// find duplicates
// 1-
// arr[0] = 1,
// arr.indexof(1) = 0
// 0 !== 0

// 2-
// arr[1] = 2
// arr.indexOf(2) = 1
// 1 !==1

// 6
// arr[6] = 66
// arr.indexof(66) =  5
// 5 !== 6 first occurance it won't be added

// 7
// arr[7] = 66
// arr.indexof(66) =  5
// 5 !== 6 it will be added !!

// If arr.indexOf(value) === index, it's the first occurrence → NOT included.
// If arr.indexOf(value) !== index, it's a duplicate → INCLUDED in newArray
var arr = [
  1, 2, 33, 4, 5, 66, 66, 76, 67, 89, 88, 87, 76, 33, 98, 101, 102, 103, 101,
];

const showDuplicates = arr.filter((value, index, arr) => {
  return arr.indexOf(value) !== index;
});

console.log(showDuplicates);

const removeDuplicates = arr.filter((value, index, arr) => {
  return arr.indexOf(value) === index;
});
console.log(removeDuplicates);

