const areaOfCircle = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
}
console.log(areaOfCircle(10))


// normal
function hello(name) {
    return "Hello " + name + "!";
}

// arrow
const hello2 = name => "Hello " + name + "!";


console.log(hello("John"))
console.log(hello2("John"))

console.log("====================================")

const sum = (...numbers) => { // by using ... we can pass any number of arguments
    console.log(numbers)
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))