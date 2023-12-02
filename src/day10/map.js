countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],['Norway', 'istanbul'], // cant duplicate key in map so overwrite on old value
]
const map = new Map(countries)
console.log(map)
console.log(map.size)


const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm').set('Turkey', 'Istanbul') // this is chainable
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

console.log(countriesMap.get('Finland')) // Helsinki

console.log(countriesMap.has('Finland')) // true