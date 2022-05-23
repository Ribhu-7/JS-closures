//1
//     function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

console.log("This page says 1")//answer
console.log("This page says 2");
console.log("This page says 3");
console.log("This page says 4");

//2

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

console.log("1"); // answer
console.log("2"); //answer

//3

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

console.log("after 1 second it will print 3");


//4
function rectanglee(length){
  return function innerRectanglee(breadth){
      var area = length * breadth;
      console.log(area);
  }
}

var areaa = rectanglee(2);
areaa(3);

//5

const g = function(){
  let a =0;
return  function(){
  a ++;
 console.log(`Now the count is ${a}`);

}

}

const f = g();
f();
f();
f();
//6


// var a = 12;
// (function () {
//   alert(a);
// })();

console.log("this page says 12");

//7

// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();

console.log("this page says 12");

//8

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

// output-
// outerArg = 123
// innerArg = 456
// outerVar = a
// innerVar = b
// globalVar = xyz