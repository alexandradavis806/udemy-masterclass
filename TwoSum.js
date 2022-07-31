//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.


const twoSum = (nums, target) => {
    // looking for a collection of integers nums to add up to target
    // when found, return the indices of the two numbers
    
    //take array, nums, and iterate through
    //create a window to look at two numbers at a time
    
    if(nums.length === 0){
        return null
    }
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j< nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                return [i, j]
            }
        }
    }
};