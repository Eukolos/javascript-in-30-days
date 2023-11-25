const now = new Date()
console.log(now) // 2023-11-25T14:38:14.484Z
console.log(now.getFullYear()) // 2023
console.log(now.getMonth()) // 10
console.log(now.getDate()) // 25
console.log(now.getDay()) // 6
console.log(now.getHours()) // 17
console.log(now.getMinutes()) // 38
console.log(now.getSeconds()) // 52
console.log(now.getMilliseconds()) // 24
console.log(now.getTime()) // 1700923132024


const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true

const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56