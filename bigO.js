// write a function that calculates the sum of all numbers from 1 up to (and including) some number n

const addUpTo = (n) => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }

  // n additions and n assignments

  console.log(addUpTo(6))


const addUpToMathy = (n) => {
    return n * (n + 1) / 2;
}

// this one is way faster than the first
// only three operations regardless of the value of n


console.log(addUpToMathy(6))


// const charCount = (str) => {
//     const obj = {}
//     for (let char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             }
//         }
//     }
//     return obj
// }

// const charCount = (str) => {
//     const obj = {}
//     for (let char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             obj[char] = ++obj[char] || 1
//         }
//     }
//     return obj
// }

// console.log(charCount("Hello hi!"))


 // using character codes are WAY faster than regular expressions:

const isAlphaNumeric = char => {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
            return false
        }
        return true
}

const charCount = (str) => {
    const obj = {}
    for (let char of str) {
        char = char.toLowerCase();
        if (isAlphaNumeric(char)) {
            obj[char] = ++obj[char] || 1
        }
    }
    return obj
}

// this is using character codes ^

console.log(charCount("Hello hi!"))
