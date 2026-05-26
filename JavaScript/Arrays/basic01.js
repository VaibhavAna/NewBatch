//Objects Methods 

let person ={name:"Vaibhav",age:23,course:"fs",add:"Noida"};

// const keyArr = Object.keys(person);
// console.table(person);

// const valueArr=Object.values(person);
// console.log(valueArr);

// Object.freeze(person); // This will prevent any modifications to the object
// person.newName = "Vaibhav";
// person.course = "backend";
// console.log(person);

// Object.seal(person); // This will allow modifications to existing properties but prevent adding new properties
// person.course = "backend";
// person.newName = "Vaibhav"; // This will not be added to the object
// console.log(person);


// const target = { a: 1 };
// const source = { b: 2, c: 3, a: 5 };
// const returnedTarget = Object.assign(target, source);
// // console.log(target);
// // Output: { a: 1, b: 2, c: 3 }
// console.log(returnedTarget);
// // Output: { a: 5, b: 2, c: 3 }


// // const car = { brand: "Toyota", model: "Camry", year: 2020 };
// // console.log(car.hasOwnProperty("brand")); // Output: true
// // console.log(car.hasOwnProperty("color")); // Output: false