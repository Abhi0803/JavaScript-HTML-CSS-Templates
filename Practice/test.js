/* Finding the Word in the string */
/*
const scramble = (str1, str2) => {
  let result;
  for (let i = 0; i < str2.length; i++) {
    let found = str1.match(str2.charAt(i));

    if (found === null) {
      result = false;
      break;
    } else {
      str1 = str1.replace(found, "");
      result = true;
    }
  }
  console.log(str1);
  return result;
};

let str01 = "phaysped";
let str02 = "happy";

console.log(scramble(str01, str02));
*/

/* Hunger Challenge */
/*
function foodDistribution(arr) {
  let N = arr.shift();
  let hungers = arr;
  let diffs = differences(hungers);
  if (N >= diffs) {
    return 0;
  }
  while (N > 0 && sum(diffs) > 0) {
    let combos = [];
    for (let i = 0; i < hungers.length; i++) {
      let combo = hungers.slice();
      combo[i]--;
      combos.push(combo);
    }
    // console.log(combos);
    hungers = combos.reduce(minDiff);
    N--;

    diffs = differences(hungers);
  }

  return sum(diffs);
}

// HELPER METHODS
// Returns an array of differences across each pair
function differences(array) {
  let diffs = [];

  for (let i = 0; i < array.length - 1; i++) {
    diffs.push(Math.abs(array[i] - array[i + 1]));
  }
  return diffs;
}

// Returns the sum of all values in an array (i.e. sum of all diffs)
function sum(array) {
  return array.reduce((p, c) => p + c, 0);
}

// Compares two array and returns the array with the smallest sum of differences
function minDiff(arr1, arr2) {
  //   console.log(arr1, arr2);
  console.log("arr1 : " + arr1 + " arr2 : " + arr2);

  if (sum(differences(arr1)) <= sum(differences(arr2))) {
    return arr1;
  } else {
    return arr2;
  }
}
foodDistribution([5, 3, 1, 2, 1]);
*/

// let a = [0, 1, 2, 3, 4, 5, 6, 7, 9];

// for (let i = 0; i < a.length; i++) {
//   // console.log(i, a[i]);
//   if (i != a[i]) {
//     console.log(i);
//   }
// }

let ex = [0, 1, 2, 3, 4, 5, 6, 7, 9];
for (let i = 0; i < ex.length; i++) {
  if (i === ex[i]) {
    // console.log(ex[i]);
  } else {
    console.log(i);
  }
}
