const companies = new Set()

companies.add('Google')
companies.add('Facebook')
companies.add('Amazon')
companies.add('Microsoft')

console.log(companies)

companies.delete('Facebook')
companies.has('Facebook') // false
companies.has('Google') // true
companies.size // 3
companies.clear() // delete all

const names = new Set(["Eminem","50Cent", "DrDre", "SnoopDogg","Eminem"]) // only unique values, eminem is not duplicated
console.log(names)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

console.log("----------------------------------")
console.log("Intersection of A and B")
let a1 = [1, 2, 3, 4, 5]
let b1 = [3, 4, 5, 6]

let A1 = new Set(a1)
let B1 = new Set(b1)

let c1 = a1.filter((num) => B1.has(num))
let C1 = new Set(c1)

console.log(C)