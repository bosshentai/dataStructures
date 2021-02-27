// Give 2 arrays, create a function that let's a user know (tru/false) whether
// these two arrays contain any common items

// //For example:
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];
// should return false.

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];
// shuold return true

//console.log(array1.diff(array2));
// nha ideia

function common(array1, array2) {
  const newArray = array1.filter((element) => array2.includes(element));

  if (newArray != 0) {
    return true;
  }

  return false;
}

console.log(common(array1, array2));

// 2 parameters  - arrays
// return true or false

// function containsCommonItem(arr1,arr2){
//     for (let i=0; i < arr1.length;i++){
//         for (let j= 0; j < arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 return true;
//             }
//         }
//     }

//     return false
// }

//  arra1 ==> obj {
//     a : true,
//     b : true,
//     c : true,
//     x : true,
// }
//array2[index] === obj.properties

function containsCommonItem2(arr1, arr2) {
  // loop through first arry and create object
  // where properties == items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  //console.log(map)
  // loop through second array and check if item
  // in second array exists on created object.

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }

  return false;
}

console.log(containsCommonItem2(array1, array2));
