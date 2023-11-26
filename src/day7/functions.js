function functionName() {
    console.log("Hello World")
}
functionName() // calling function by its name and with parentheses

// function without parameter,  a function which make a number square
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}

square() // 4

// function without parameter
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo

    console.log(sum)
}

addTwoNumbers() // a function has to be called by its name to be executed

function printFullName (){
    let firstName = 'Emin'
    let lastName = 'Aksoy'
    let space = ' '
    return firstName + space + lastName;
}

console.log(printFullName())
