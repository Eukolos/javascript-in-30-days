const rectangle = {
    length: 20,
    width: 20
}
console.log(rectangle) // {length: 20, width: 20}

const person = {
    firstName: 'Emin',
    lastName: 'Aksoy',
    age: 26,
    country: 'Türkiye',
    city: 'İstanbul',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'java',
        'spring boot'
    ],
    isMarried: true,
    getFullName: function() {
        return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
}
console.log(person)

console.log(person.age)

// accessing values using .
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// value can be accessed using square bracket and key name
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person['phone number']) // you cant access like this person.phone number

person.nationality = 'Turk'
person.country = 'Türkiye'
person.title = 'developer'
person.skills.push('Java')
person.skills.push('Spring Boot')
person.isMarried = true

person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
        .splice(0, this.skills.length - 1)
        .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe developing ${skills}.`
    return statement
}
console.log(person)
console.log(person.getPersonInfo())
console.log(person.skills)

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person)
console.log(copyPerson)
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']