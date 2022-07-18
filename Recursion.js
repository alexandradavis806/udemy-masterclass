// What is recursion?

// a process (a function in our case) that calls itself


// JSON.parse / JSON.stringify is a recursive function

// functions, when they're invoked, are often waiting on another function to be called. the correct order matters - the call stack is in charge of this in js. it's a stack data structure

// when a function is invoked, it's placed on the top of the call stack (pushed). when js sees the return keyword or when the function ends, the compiler will remove (pop)


// how recursive functions work?

// invoke the same function with a different input until you reach your base case
// base case: the condition when the recursion ends - VERY IMPORTANT!

