const arr = [1, 2, 3, 4, 5];

arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
})
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
    console.log(index, element, arr)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num)
console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))