// function declaration
   function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40));  // 173

// const anonymousFun = function() {
//     console.log(
//         'I am an anonymous function and my value is stored in anonymousFun'
//     )
// }

    (function(n) {
        console.log(n * n)
    })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function(n) {
    return n * n
})(10)

console.log(squaredNum)