const names = ['Eukolos', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, false, false]

const areSomeTrue = bools.some((b) =>  b === true)
const areSomeEndsWithS = names.some((name) => name.endsWith('s'))

console.log(areSomeTrue) //true
console.log(areSomeEndsWithS) //true