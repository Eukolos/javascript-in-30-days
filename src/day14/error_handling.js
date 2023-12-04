// // reference error
// try {
//     console.log("Hello World");
//     console.log(a);
//     console.log("This is after error"); // This line will not be executed
// } catch (error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
// }
//
// // math error
// try {
//     console.log(10 / 0);
// } catch (error) {
//     console.log(error.message);
// } finally {
//     console.log("This is finally block");
// }
//
// const throwErrorExampleFun = () => {
//     let message
//     let x = prompt('Enter a number: ')
//     try {
//         if (x  == '') throw 'empty'
//         if (isNaN(x)) throw 'not a number'
//         x = Number(x)
//         if (x < 5) throw 'too low'
//         if (x > 10) throw 'too high'
//     } catch (err) {
//         console.log(err)
//     }
// }
// throwErrorExampleFun()
//
//
// // syntax error
//
// let square = 2 x 2;
// console.log(square)
// console.log('Hello, world")
//
// // type error
//
// let a = 10;
// a.toUpperCase();