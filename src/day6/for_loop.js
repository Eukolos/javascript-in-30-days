for (let i = 0; i <= 5; i++) {
    console.log(i)
}

console.log("\n-------------------------------------------\n")

for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

console.log("\n-------------------------------------------\n")

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
    newArr.push(countries[i].toUpperCase())
}

console.log(newArr)

console.log("\n-------------------------------------------\n")

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}
console.log(sum)

console.log("\n-------------------------------------------\n")


for(let i = 0; i <= 5; i++){
    if(i == 3){
        break
    }
    console.log(i)
}

// 0 1 2

for(let i = 0; i <= 5; i++){
    if(i == 3){
        continue
    }
    console.log(i)
}

// 0 1 2 4 5