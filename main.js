//Assignment 1

//Question 1

// let x = 123;
// let z = Number(x)+7;
// console.log({z});
//////////////////////////////////////////////////////////////////////////////

//Question 2
// let x=0;
// if(x==0 || x==null || x==undefined || x==""){
//     console.log("invalid")
// }
//////////////////////////////////////////////////////////////////////////////

//Question 3
// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }
//////////////////////////////////////////////////////////////////////////////

//Question 4

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let z =arr.filter( (value) =>  value % 2==0  )

//     console.log(z);
//////////////////////////////////////////////////////////////////////////////

//Question 5
// let arr1 =[1,2,3];
// let arr2 = [4,5,6];
// let merged = [ ...arr1 , ...arr2];
// console.log(merged);
//////////////////////////////////////////////////////////////////////////////

//Question 6
// let x = 2;
// switch (x) {
//   case 1:
//     console.log("sunday");
//     break;
//   case 2:
//     console.log("monday");
//     break;
//   case 3:
//     console.log("tuesday");
//     break;
//   case 4:
//     console.log("wednesday");
//     break;
//   case 5:
//     console.log("thursday");
//     break;
//   case 6:
//     console.log("friday");
//     break;
//   case 7:
//     console.log("saturday");
//     break;
//   default:
//     console.log("invalid");
// }
//////////////////////////////////////////////////////////////////////////////

//Question 7
// let arr = ['a','ab', 'abc'];
// let z = arr.map((value)=> value.length )
// console.log(z);
//////////////////////////////////////////////////////////////////////////////

//Question 8

// function isDevidible(number){
//     if(number%3==0 && number%5==0){
//         console.log("divided by both");

//     }
//     else if( number%3==0 && number%5!=0){
//         console.log("divided by 3 only");

//     }
//      else if(number%3!=0 && number%5==0){
//         console.log("divided by 5 only");

//     }

// }
//////////////////////////////////////////////////////////////////////////////

//Question 9
// let x = (number) => number*number ;
//////////////////////////////////////////////////////////////////////////////

//Question 10
// function frommating(data) {
//   const { name, age } = data;

//   return `${name} is ${age} years old`;
// }

// let x ={ name : "hazem" , age : 20};
// console.log(frommating(x));
//////////////////////////////////////////////////////////////////////////////

//Question 11

// function getSum(...data) {
//   let count = 0;
//   for (i = 0; i < data.length; i++) {
//     count += data[i];
//   }
//   return count;
// }

// console.log(getSum(1, 2, 9));
//////////////////////////////////////////////////////////////////////////////


//Question 12
// function SuccessPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Success');
//     }, 3000); 
//   });
// }


//////////////////////////////////////////////////////////////////////////////

// Question 13
// function findMax(data) {
//   let max=0
//   for (i = 0; i < data.length; i++) {
//     if ( max < data[i]){
//         max=data[i];
//     }
//   }
//   return max;
// }
//////////////////////////////////////////////////////////////////////////////




//Question 14

// function obj (obj){
//     return Object.keys(obj)
// }
//////////////////////////////////////////////////////////////////////////////


//Question 15

// function splitted (phrase){

//     return phrase.split(" ");

// }
//////////////////////////////////////////////////////////////////////////////



//Question 16
// forEach works only on arrays and can’t use break/continue, for...of works on any iterable and allows loop control, so use forEach for simple loops and forof when you need control like break or continue.

//Question 17
// Hoisting lifts declarations to the top,  the TDZ is the period where let/const exist but cannot be accessed before initialization.
// console.log(x); let x = 5; 

//Question 18
// compares value with value only, but === compares value with value and type with type using type coesion.

//Question 19
// try-catch catches errors to prevent crashes, and it's important because it's able to handle the reject promises.


//Question 20
// Type conversion refers to the process of explicitly changing the type of a value, but coercion refers to the implicit type conversion that happens when JavaScript tries to perform an operation with values of different types.
// Number("5")
// "5" * 2 



//Question 18

// /**
// //  * @param {integer} init
// //  * @return { increment: Function, decrement: Function, reset: Function }
// //  */
// var createCounter = function(first) {
    
//     let value = frist;

//     return {
//         increment: () => ++value,
//         decrement: () => --value,
//         reset: () => (value = first)
//     };
// };

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


 console.log("Hello YOU");
