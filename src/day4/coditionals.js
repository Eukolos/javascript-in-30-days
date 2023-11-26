let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`)
}
//  3 is a positive number

let isRaining = Math.floor(Math.random() * 11) > 5
if (isRaining) {
    console.log('Remember to take your rain coat.')
} else if (!isRaining) {
    console.log('No need for a rain coat.')
} else {
    console.log('Have a nice day.')
}

let randomNum = Math.floor(Math.random() * 6)

switch (randomNum) {
    case 0:
        console.log('Even');
        break;
    case 1:
        console.log('Odd');
        break;
    case 2:
        console.log('Even');
        break;
    case 3:
        console.log('Odd');
        break;
    default:
        console.log('default');
}

let weather = 'cloudy'
switch (weather) {
    case 'rainy':
        console.log('You need a rain coat.')
        break
    case 'cloudy':
        console.log('It might be cold, you need a jacket.')
        break
    case 'sunny':
        console.log('Go out freely.')
        break
    default:
        console.log(' No need for rain coat.')
}

isRaining ? console.log('You need a rain coat.') : console.log('No need for a rain coat.')
