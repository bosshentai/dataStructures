function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("booo!");
  }
}

boo([1, 2, 3, 4, 5]); // O(n)

function arrayOfHinTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

arrayOfHinTimes(6)