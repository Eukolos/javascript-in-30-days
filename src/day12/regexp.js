// let pattern = 'love'
// let flag = 'gi'
// let regEx = new RegExp(pattern, flag)

const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str) // return true or false
console.log(result)

const str1 = 'I love JavaScript'
const pattern1 = /love/
const result1 = str.match(pattern1) // return array of first match
console.log(result1)

const str2 = 'I love JavaScript'
const pattern2 = /love/g
const result2 = str.match(pattern2) // return array of all matches
console.log(result2)

const str3 = 'I love JavaScript'
const pattern3 = /love/g
const result3 = str.search(pattern3) // return index of first match
console.log(result3)

const pattern4 = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const txt4 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches4 = txt4.match(pattern4)

console.log(matches4)

console.log('------------------')
console.log('escape character with regexp')

const pattern5 = /\d/g  // d is a special character which means digits
const txt5 = 'This regular expression example was made in January 12,  2020.'
const matches5 = txt5. match(pattern5)
console.log(matches5)  // ["1", "2", "2", "0", "2", "0"], this is not what we want

const pattern6 = /\d+/g  // d is a special character which means digits
const txt6 = 'This regular expression example was made in January 12,  2020.'
const matches6 = txt6. match(pattern6)

console.log(matches6)  // ["12", "2020"], this is not what we want