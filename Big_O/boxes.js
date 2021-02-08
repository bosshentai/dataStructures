const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes);


function compressBoxesTwice(boxes, boxes2){
  boxes.forEach(function(boxes){
    console.log(boxes);
  });

  boxes.forEach(function(boxes){
    console.log(boxes);
  })
}
// O(a   + b)