// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.


const isPalindrome = (x) => {
    //given an interger x,
    // return true if x is a palindrome integer
    
    // convert x to string 
    // reverse the string 
    // if x starts with -, return false
    
    const rev = Number(String(x).split('').reverse().join(''));    
    console.log(rev)
    console.log(x[0])
    if(x[0] === '-') {
        return false;
    } else if (rev === x) {
        return true
    } else {
        return false
    }
    
};