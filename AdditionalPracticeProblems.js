  const sameFrequency = (first, second) => {
    // good luck. Add any arguments you deem necessary.
    const firstArr = first.toString().split('')
    const secondArr = second.toString().split('')
    if (firstArr.length !== secondArr.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < firstArr.length; i++) {
      let number = firstArr[i];
      // if letter exists, increment, otherwise set to 1
      lookup[number] ? (lookup[number] += 1) : (lookup[number] = 1);
    }
    console.log(lookup)
  
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
  }

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
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    //   console.log(collection)

    }
    for(let key in collection){
      if(collection[key] > 1) return true
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

console.log(areThereDuplicates(1,2,2,3,4,5))

  function areThereDuplicatesOneLiner() {
    return new Set(arguments).size !== arguments.length;
  }

  // what i don't quite understand about this problem is the use of arguments. what data structure are we assuming it is?



  // given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pairs equals the target average. there may be more than one pair that matches the average target


//   const averagePair = (arr, average) => {
//     let start = 0
//     let next = 1
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i])
//         for (let)
//     }
//     console.log(start)
//   }


//   console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))