//Print Value in the single format.

// let i = 0;
// while (i<5){
//     console.log(i);
//     i++;
// }


//How to count the value 

// let a=123456;
// let count =0;
// while (a>0){
//     count++;
//     a =Math.floor(a/10);
// }
// console.log(count);

//Sum of digit of numbers 

// let sum = 0 ;
// let a=1234

// while (a>0){
//     let digit =a%10;
//     sum= sum+digit;
//     a=Math.floor(a/10);
// }

// console.log(sum);

// let a=1234;
// let rev=0;
// while(a>0){
//     let digit=a%10
//     rev= rev*10+digit;
//     a = Math.floor(a/10);
// }
// console.log(rev);


//Print numbers from 1 to N

// function printNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// printNumbers(5);

// function printNumbers(n){
//     for (let i =1; i <=n; i++){
//         console.log(i);
//     }
// }
// printNumbers(10);

//Print even number from 1 to N 

//Print Even No 

// function printEven(n){
//     for (let i=2; i<=n; i+=2){
//         if(i%2 === 0){
//             console.log(i);
//         }
//     }
// }
// printEven(20)

//Print Odd No 

// function printOdd(n){
//     for(let i= 1;i<=n; i++){
//         if(i%2 !==0){
//             console.log(i);
//         }
//     }
// }
// printOdd(10)


//Find the sum of first N natural Numbers 


// function sumN(n){
//     let sum =0;
//     for (let i=1;i<=n; i++){
//         sum +=i;
//     }
//     return sum ;
// }
// console.log(sumN(5));

//Find the factorial of a number 

// function factorial(n) {
//     let fact = 1;
//     for (let i = 1; i <=n; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// console.log(factorial(5));


// 
// function reverseNumber(n){
//     let rev= 0;

//     while (n>0){
//         let digit= n%10;
//         rev=rev*10 + digit ;
//         n=Math.floor(n/10);
//     }
//     return rev;
// }
// console.log(reverseNumber(123));


//Fabonoic Series

// let n= 10;

// let a=0, b=1;

// for (let i= 0; i<n; i++){
//     console.log(a);
//     let next = a+b;
//     a=b;
//     b=next;
// }

//Sum of digit 

// function sumOfDigit(num){
//     let sum =0;

//     for (;num>0; num=Math.floor(num/10)){
//         sum +=num %10;
//     }

//     return sum;
// }
// console.log(sumOfDigit(1234));

//In and of loop 

// let i=15;
// do{
//     console.log(i);
//     i++;
    
// }while(i<=10);

// let arr =[12,34,56,78,98];

// let arr =[12,34,65,78,90 ];

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// for (let x of arr) {
//   console.log(x);
// }

// let person = {
//   name: "Amit",
//   age: 25,
//   address: "123 Main St",
  

// };

// for (let x in person) {
//   console.log(x, person[x]);
// }




// Armstrong number =>

//  153  = 1^3+5^3+3^3(153)
// 1 = 1 , 5 = 125  ,3= 27

// let num = 153;
// let temp = num;
// let sum = 0;

// while (temp > 0) {
//   let digit = temp % 10;
//   sum += digit ** 3;
//   temp = Math.floor(temp / 10);
// }
// if (sum == num) {
//   console.log("Armstrong number");
// } else {
//   console.log("not ARmstrong number ");
// }



// Palindrome

// 121 = 121

// let num = 1212;
// let temp = num;
// let rev = 0;

// while (temp > 0) {
//   let digit = temp % 10;
//   rev = rev * 10 + digit;
//   temp = Math.floor(temp / 10);
// }

// console.log(rev == num ? "Palindrome" : "not palindrome");


//Solve questions by do while loop .

// do while

// do{

// }while();

// let i=1;

// do{
//     console.log(i);
//     i++;
// }while (i<=5);


//Reverse a number  using do while 

// function reverseNumber(num ){
//     let reversed =0;

//     do{
//         let digit=num %10;
//         reversed = reversed*10 +digit;
//         num=Math.floor(num/10);
//     }while (num>0);

//     return reversed;
// }
// console.log(reverseNumber(1234));

// function reverseNumber(num){
//     let reversed=0;

//     do{
//         let digit=num%10;
//         reversed=reversed*10+digit;
//         num=Math.floor(num/10);
//     }while(num>0);

//     return reversed;
// }
// console.log(reverseNumber(23456));


//Count Digits in a Number


// function countDigits(num){
//     let count=0;

//     do{
//         count++;
//         num= Math.floor(num/10);
//     }while(num>0);

//     return count;
// }
// console.log(countDigits(12345678));

//-------------------------------------------------------------------------------//

// function countDigits(num){
//     let count=0;

//     do{
//         count ++;
//         num =Math.floor(num/10);
//     }while(num>0);

//     return count;
// }
// console.log(countDigits(345876543456776));



//Find Factorial of a Number

// function factorial(n){
//     let result=1;
//     let i=1;

//     do{
//         result *=i;
//         i++;
//     }while(i <=n);
//     return result;
// }
// console.log(factorial(5));

//------------------------------------------------------------------//

// function factorial(n){
//     let result=1;
//     let i=1;

//     do{
//         result*=i;
//         i++;
//     }
//     while(i<=n);
//     return result;
// }
// console.log(factorial(7));






//Check if a no is palindrom

// function isPalindrome(num) {
//     let original = num;
//     let reversed = 0;

//     do {
//         let digit = num % 10;
//         reversed = reversed * 10 + digit;
//         num = Math.floor(num / 10);
//     } while (num > 0);

//     return original === reversed;
// }
// console.log(isPalindrome(121));

//---------------------------------------------------------------------------------//
// function isPalindrome(num){
//     let orginal = num;
//     let reversed=0;

//     do{
//         let digit =num%10;
//         reversed= reversed*10+digit;
//         num=Math.floor(num/10);
//     }while(num>0);
//     return orginal === reversed;
// }
// console.log(isPalindrome(131));


//check no is Armstrong 



