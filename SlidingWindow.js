// pattern involves creating a window which can either be an arrray or number from one position to another 
// depending on a certain condition, the window either increases or closes (and a new window is created)
// very useful for keeping track of a subset of data in an array/string 


// write a function which accepts an array of integers and a number called n. the function should calculate the max sum of n consective elements in the array

const maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num){
        return null
    }
    for (let i = 0; i < num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))