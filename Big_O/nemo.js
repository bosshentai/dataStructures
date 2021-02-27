const { performance } = require("perf_hooks");

const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];

const large = new Array(100000).fill("nemo");

function findNemo(array) {
  // let t0 = performance.now();

  for (let i = 0; i < array.length; i++) {
   // console.log("running");
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
      break;
    }
  }
  // let t1 = performance.now()

  //  console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds')
}

//findNemo(nemo);

findNemo(everyone);

//findNemo(large); // O(n) --> Linear Time

const findNemo2 = array => {
  array.forEach(fish => {
    if(fish === 'nemo' ){
      console.log('Found Nemo!');
    }
  })
}


const findNemo3 = array => {
  for(let fish of array) {
    if(fish === 'nemo' ){
      console.log('Found Nemo!');
    }
  }
}

findNemo2(everyone)
findNemo3(everyone)