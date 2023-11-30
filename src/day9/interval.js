function sayHello() {
    console.log('Hello')
}
setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

function sayHello2() {
    console.log('Hello')
}
// setTimeout(sayHello2, 2000) // it prints hello after it waits for 2 seconds.

function sayHello3() {
    console.log('Hello')
}
setTimeout(() => {
    clearInterval(setInterval(sayHello3, 1000))
    console.log('stop')
}, 5000) // it prints hello in every second, 1000ms is 1s