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

///////////////////////////////////////////////////////

// 3- finding min and max

let maxArr = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>maxArr){
        maxArr = arr[i];
    }
}

console.log(maxArr)

// optimized
// if prev is greater then it will show prev or else it will show cur
// for example arr = [1,2,3,4,5,66,55,77,999,101,23] 
// prev = 1, cur = 2
// prev=1 , cur=2  => 1 > 2 no then it will show cur value 
// prev= 2 , cur=3 => 2 > 3 no then it will show cur value 
// prev=3 , cur=4 3 > 4no then it will show cur value 
// 4>5 no then it will show cur value 
// 5>66 no then it will show cur value 
// 66>55 yes it will show the prev value in the result till we find any other greatest value
// 55>77 no then it will show cur value 
// 77>999 no then it will show cur value 
// 999>101 yes, it will replace the 66 from the greatest value
// 101>23 yes it is greatest but we already have the greatest 999 value then in the result we will have 999
let newArr = [1,2,3,4,5,66,55,77,999,101,23] 
let maxNumber = newArr.reduce((prev,cur)=>{
    return prev>cur?prev:cur;
})
console.log(maxNumber)
