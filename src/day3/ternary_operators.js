
let isRaining = true
isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.') // output: You need a rain coat.
isRaining = false

isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.') // output: No need for a rain coat.

let number = 5
number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`) // 5 is a positive number


number = -5

number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`) // -5 is a negative number