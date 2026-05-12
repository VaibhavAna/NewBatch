//First class functions

// function sayhello(){
//     return "Hello";
// }

// function execute(fn){
//     console.log(fn());
// }
// execute(sayhello);

//2. Closures -> When a function remembers variable from its outer scope 

// function outer(){ 
//     let count = 0;
    
//     return function inner (){
//         count++;
//         return count;
//     };
// }
// console.log(outer)


//3.this Keyword

// const obj = {
//   name: "Vaibhav",
//   greet: function() {
//     console.log(this.name);
//   }
// };
// obj.greet(); // Vaibhav