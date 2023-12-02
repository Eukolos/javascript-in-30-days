const names = ['Emin', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)


const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // Are all true?

console.log(areAllTrue) // true
