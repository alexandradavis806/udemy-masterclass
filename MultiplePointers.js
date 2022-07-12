// creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition 
// very efficient for solving problems with minimal space complexity as well

// has some sort of stucture like an array, string, or linked list


// write a function called sumZero which accepts a SORTED array of integers. the function should find the first pair where the sum is 0. return an array that includes both values that sum to zero or undefined if a pair does not exist. return undefined if no pairs

// naive example:

const naiveSumZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}

// naive because it is o(n^2)

//REFACCTOR:

const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1]))