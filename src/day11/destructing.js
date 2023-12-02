const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree) // 1 2 3

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson,thirdPerson, fourthPerson) // Asabeneh Brook David John

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e,pi,gravity, bodyTemp, boilingTemp) // 2.72 3.14 9.81 37 100

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack

console.log(frontEnd) // ['HTML', 'CSS', 'JS', 'React']
console.log(backEnd) // ['Node', 'Express', 'MongoDB']

const numbers = [1, 2, 3]
let [numOne, , numThree] = numbers //2 atlandı

console.log(numOne, numThree) // 1 3

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [, secondPerson, , fourthPerson] = names // birinci ve üçüncü değer atlandı

console.log(secondPerson, fourthPerson) // Brook John

const names = [undefined, 'Brook', 'David']
let [
    firstPerson = 'Asabeneh',
    secondPerson,
    thirdPerson,
    fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)  // Asabeneh Brook David John

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3) // 1 2 3
console.log(rest) // [4, 5, 6, 7, 8, 9, 10]