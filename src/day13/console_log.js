console.log('30 Days of JavaScript') // we can use console.log() to print something on the console

console.log('%d %s of JavaScript', 30, 'Days') // 30 number %d, Days string %s

console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
    '%c30 Days%c %cOf%c %cJavaScript%c',
    'color:green',
    '',
    'color:red',
    '',
    'color:yellow'
) // log output green red and yellow text