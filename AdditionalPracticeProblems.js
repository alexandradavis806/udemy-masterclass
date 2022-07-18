const sameFrequency = (first, second) => {
  // good luck. Add any arguments you deem necessary.
  const firstArr = first.toString().split("");
  const secondArr = second.toString().split("");
  if (firstArr.length !== secondArr.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < firstArr.length; i++) {
    let number = firstArr[i];
    // if letter exists, increment, otherwise set to 1
    lookup[number] ? (lookup[number] += 1) : (lookup[number] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < secondArr.length; i++) {
    let number = secondArr[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[number]) {
      return false;
    } else {
      lookup[number] -= 1;
    }
  }
  return true;
};

//SOLUTION:

//   function sameFrequency(num1, num2){
//     let strNum1 = num1.toString();
//     let strNum2 = num2.toString();
//     if(strNum1.length !== strNum2.length) return false;

//     let countNum1 = {};
//     let countNum2 = {};

//     for(let i = 0; i < strNum1.length; i++){
//       countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//     }

//     for(let j = 0; j < strNum1.length; j++){
//       countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//     }

//     for(let key in countNum1){
//       if(countNum1[key] !== countNum2[key]) return false;
//     }

//     return true;
//   }

//   console.log(sameFrequency(123, 321))

// write a function that accepts a variable number of arguments, and checks whether there are any duplicates among the arguments being passed in
// (can be solved using the frequency counter pattern or the multiple pointers pattern)

// frequency counter solution:

function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    //   console.log(collection)
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  // console.log(collection)
  return false;
}

//   function areThereDuplicates(...args) {
//     // Two pointers
//     args.sort((a,b) => a > b);
//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//       if(args[start] === args[next]){
//           return true
//       }
//       start++
//       next++
//     }
//     return false
//   }

console.log(areThereDuplicates(1, 2, 2, 3, 4, 5));

function areThereDuplicatesOneLiner() {
  return new Set(arguments).size !== arguments.length;
}

// given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pairs equals the target average. there may be more than one pair that matches the average target

const averagePair = (arr, average) => {
  // let start = 0
  // let next = 1
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    for (let j = 1; j < arr.length; j++) {
      // console.log(arr[i])
      // console.log('I ^^^')
      // console.log(arr[j])
      // console.log('J ^^^')
      if (arr[i] + arr[j] / 2 === average) {
        return true;
      }
    }
  }
  return false;
};

// this one is O(n^2)
console.log(averagePair([1, 3, 3, 5, 6, 7, 11, 12, 19], 8));

const averagePair2 = (arr, num) => {
    let start = 0
    let end = arr.length -1
    while (start < end){
        let avg = (arr[start]+arr[end]) / 2
        if (avg === num) return true;
        else if (avg < num) start ++
        else end--
    }
    return false;
}

// takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing

const isSubsequence = (str1, str2) => {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
};

console.log(isSubsequence("abc", "acb"));


// given an array of integers and a number, write a function called maxSubarraySum, which finds the max sum of a subarray with the length of the number passed to the function 

const maxSubarraySum = (arr, num) => {
    let tempSum = 0
    let maxSum = 0
    if (arr.length < num){
        return null
    }

    for (let i=0; i < num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}

console.log(maxSubarraySum([100,200,300,400], 2))


// write a function which accepts two parameters - an array of positive integers and a positive integer. it should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. if there isn't one, return 0 instead

const minSubArrayLen = (arr, num) => {
 // create a sliding door to look at 
 // looking to find two consecuative integers, that when added are > num
 // return a number for how many integers are needed to add up to == or > the integer 


 //COME BACK TO

}

console.log(minSubArrayLen([2,3,1,2,4,3], 7))