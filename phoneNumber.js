// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.



// method 1

function createPhoneNumber(arr) {
  let areaCode = arr.slice(0, 3).join("");
  let middleDigits = arr.slice(3, 6).join("");
  let lastDigits = arr.slice(6).join("");

  return `(${areaCode}) ${middleDigits} - ${lastDigits}`;
  // returns "(123) 456-7890"
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


// method 2

// function createPhoneNumber(arr) {
//   let format = "(123) 456- 7890";
//   for (let i = 0; i < arr.length; i++) {
//     format = format.replace("1234567890", arr[i]);
//   }
//   return format;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));