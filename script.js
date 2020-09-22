// var name = prompt("what is your name?");
// alert("Hello, " + name);
// var message = "Hello, world and this is \n\"the passphrase\" for backup"; // \n means new line
// if (message.length >= 52) {
//     console.log(message);
//     alert(message);
// };
// var balance = prompt("type the balance");
// if(balance == 0){
// alert("the balance is zero" + " and current balance = " + balance);
// }
// else if(balance < 0){
//     alert("balance is negative" + " and current balance = " + balance);
// }
// else if( balance >=1){
//     alert("balanc is positive" + " and current balance = " + balance );
// }
// var a = 123;
// var b = "123";
// //equality check
// if(a !== b){
// console.log("a and b are equal");
// }
// else{ 
//     console.log("a and b are not equal");
// }

// var grade = "premium";
// switch(grade){
// case "regular":
//     alert("it's $3.15");
//     break;
// case "premium":
//     alert("it's $3.35");
//     break;
// case "diesel":
//     alert("it's 3.47");
//     break;
// default:
//     alert("That's not a valid grade");
// // }
// function addTwoNumbers(c,g,f){

//     var d = c+g+f;
//     return("The value is " + d);
// }
// var x = addTwoNumbers(3,4,5);
// alert(x);

// var x;// global scope
// function simpleFunction(){
//     x = 500;
//     alert(x);
// }
// simpleFunction();
// alert(x);

// iterations or loops
// var a = 1;
// while(a<10){
// alert(a);
// a++;
// }

// var amount = 0; 

// //create the index
// var i = 1;// or i =0
// //check condition
// while(i<=10){ // or i < 10
// amount = amount+100;
// //increment index
// i++;
// }
// alert("the value of amount ="+ amount);

// for(var i=0; i<10;i++){
// alert("british mumbo jumbo");
// console.log(i);
//  }
// var i=100;
// do{
// alert("Hello world");
// i++;
// console.log(i);
// }while(i<10);v


// var foo = "abc1"; // could be "abc"
// var myNumber = Number(foo); // make it number


// if(isNaN(myNumber)){
//     alert("it is not a number");
// }
//     else if(!isNaN(myNumber)){
//     alert("it is a number");
// }



// var phrase = "this is a simple phrase"

// alert(phrase.length);
// alert(phrase.toUpperCase());


// var str1= "Hello";
// var str2 = "1hello";
//  // str1 != str2
//  if(str1.toLowerCase() == str2.toLowerCase()){
// alert("Yes, equal");
//  }
// else{
//     alert("not, equal");
// }

// string and INDEXOF method
// var phrase = "We want a groovy keyword";
// var position = phrase.indexOf("groovy");
//  if(phrase.indexOf("DDDD")== -1){
//      alert("That word does not occur");
//  }

// var boo = "44+2";
// var myString = String(boo);
// if(isNaN(myString)){
//     alert("it is a string");
// }
// else{
//     alert("it is not a string");
// }

// var phrases = "Yet another phrase";
// var segment = phrases.slice(6,11);
// alert(segment);

// var str1 = "regular";
// var str2 = "Regular";
// if(str1<=str2){
//     alert(true);
// }
// else{
//     alert(false);
// }
// var myRe = /he..o/; // any character
// var myRe = /helloo|goodbye/; // either|or
// var myRe = /\wello/; // \w alphanumeric or _
// var myRe = /\bHello/; // \b word boundary and exact match of words case sensitive
// var myRe = /[wo]d/; // ([...]characters) range of characters matches with outside characters  
// var myString2 = "Does this sentence have the word Hello and goodbye in it?";
// if(myRe.test(myString2)){
//     alert("yes it has hello");
// }
// else{ 
// alert("no it don't");
// }
// // var sVar = /^@/; // "^" carrot character it represents the it should exist in the beginning
// // var sVar = /.com$/; // "$" dollar sign used for matching exactly the character at end
// // var sVar = /@gmail+.com/; // "+" plus sign indicates the letter before is added with duplicate same character 
// // var sVar = /@gmail*.com/; // "*" astrisk means no character or more
// // var sVar = /^@gmail?.com/; // "?" question mark means no character or one

// var sVar = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,4}$/;
// var bString = "1993@gmaill.com"
// if(sVar.test(bString)){
//     alert("yest it has the word");
// }
// else{
//     alert("does not exists");
// }
// var multipleValues = [10, 20, 21, 23, 24, "Hello"];
// console.log(multipleValues.length);
// console.log(multipleValues.reverse());
// console.log(multipleValues.sort());
// console.log(multipleValues.join());
// console.log(multipleValues.pop());
// console.log(multipleValues.push(2));
// console.log(multipleValues.shift());
// console.log(multipleValues.unshift());
// console.log(multipleValues.slice(0,5));
// var myArray = [1,2,3,4,5,4,5,6,7,4,3,7,44]
// var bL = 0;
// while(bL<myArray.length) {
//     console.log("the value is " +  myArray[bL]);
//     bL++;
// }

// console.log(myArray.length);
// var total= 0
// for(var bL=0; bL<myArray.length; bL++){
// total  = total+myArray[bL];
// console.log(total);
// }
// console.log("the total is "+ total);

// function firstFucntion(){
//  secondFunction();
// }
// function secondFunction(){
//     thridFunction();
// }
// function thridFunction(){
//     fourthFunctions();
// }
// function fourthFunction(){
//     headline.innerHTML = "you clicked and it is working"
// }

// var headline = document.getElementById("mainHeading");
// headline.onclick = function(){
//     // headline.innerHTML = "you clicked the headline"
//     firstFucntion();
// };
// var someValue = [1,2,3]; //object
// var someBoolen = true; // primitive 
// console.log(someValue.length);
// console.log(someBoolen.length);

//javascript date object

// var today = new Date();
// var y2k = new Date(2000,0,1);
// var y2k = new Date(2000,0,1,0,0,0);
// var myNewArray = new Array(1,2,3,4);
// var myRegExp = new RegExp("hello");
// var myRegExp2 = /hello/;
// console.log(today.getDay(), myRegExp,myRegExp2);
// function nextInLine(arr, item) {
//     // Only change code below this line
//     arr.push(item); 
//     return arr.shift();
//     // Only change code above this line


//   }

//   // Setup
//   var testArr = [1,2,3,4,5];

//   // Display code
//   console.log("Before: " + JSON.stringify(testArr));
//   console.log(nextInLine(testArr, 6));
//   console.log("After: " + JSON.stringify(testArr));

// var count = 0;

// function cc(card) {
  // Only change code below this line
// switch(card){
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//   count++;
//   break;
//   case 10:
//   case "J":
//   case "Q":
//   case "K":
//   case "A":
//   count--;
//   break;
// }
// var hb = "Hold";
// if(count>0){
// hb = "Bet"
// }
//   return console.log(count+" "+hb);
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');

// var nameObj = {
//   nameProp: "chanikyaamara"
// };
// function firstProp(str3){
// var a = "name";
// return a + str3;
// }
// var someName = firstProp("Prop");
// console.log(nameObj[someName]);



// var someObj = {
//   propName: "John"
// };
// function propPrefix(str) {
//   var s = "prop";
//   return s + str;
// }
// var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
// console.log(someObj[someProp]); // "John"


// function phoneticLookup(val) {
//   var result = "";

//   // Only change code below this line
 
//   var lookup = {
//     "alpha":"Adams",
//       "bravo":"Boston",
//       "charlie":"Chicago",
//       "delta":"Denver",
//       "echo":"Easy",
//     "foxtrot": "Frank"
//   };
// result = lookup[val]

//   // Only change code above this line
//   return  console.log(result);
// }

// phoneticLookup("charlie");

// function checkObj(obj, checkProp) {
//   // Only change code below this line
//   obj = {
//     "gift": "pony",
//     "pet": "kitten",
//     "bed": "sleigh"
//   };

//   if(obj.hasOwnProperty(checkProp)){
//     return console.log(obj.checkProp);
//   }else{ 
//   return console.log("Not Found");
//   // Only change code above this line
// }}

// Setup
// Setup
// var collection = {
//   2548: {
//     album: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: [
//       "Let It Rock",
//       "You Give Love a Bad Name"
//     ]
//   },
//   2468: {
//     album: "1999",
//     artist: "Prince",
//     tracks: [
//       "1999",
//       "Little Red Corvette"
//     ]
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [ ]
//   },
//   5439: {
//     album: "ABBA Gold"
//   }
// };

// // Only change code below this line
// function updateRecords(id, prop, value) {
// if(value === "" ){
// delete collection[id][prop];
// }
// else if(prop === "tracks" && value != ""){
// collection[id][prop] = collection[id][prop] || [];
// collection[id][prop].push(value);
// }else{
//   collection[id][prop] = value;
// }

//   return console.log(collection);
// }

// updateRecords(5439, "artist", "ABBA");

// var myArray = [1,2,3,4];
// var total = 0;
// for(var j = 0; j<myArray.length; j++){

// total +=  myArray[j];
// console.log(total);
// }

// function multiplyAll(arr) {
//   var product = 1;
//   // Only change code below this line
// for(var i= 0; i<arr.length; i++){
// for(var j=0;j<arr[i].length; j++){
// console.log(product *= arr[i][j]);
// }
// }
//   // Only change code above this line
//   return product;
// }

// multiplyAll([[1,2],[3,4],[5,6,7]]);
// function recurArr(arr, n){
//   var product = 1;
//   for(var i = 0; i<=n; i++){
//     product *=arr[i];
//   }
//   return console.log(product);
// }
// recurArr([1,2,3,4,5], 3)

// function multiplyAll(arr,n){
// if(n<=0){
// return 1;
// }else{
//   return ( multiplyAll(arr, n-1)*arr[n-1]);
  
// }
// }
// console.log(multiplyAll([1,2,3,4,5,5], 5));

// function countDown(i){
// if(i<=1){
// return console.log(i);
// }
// else{
//   return countDown(i-1);
// }
// }

// countDown(5);
// var product = 0;
// function fact(i){ 
// if(i===1){
//   return console.log(1);
// }else{
//   fact(i-1);
//   i*=i-1;
  
//   product = i;
//   return console.log(product);
// }
// }
// fact(9);


// function arrayQ(arr, n){
//   if(n<=0){
//     return 0;
//   }else{
//     return arrayQ(arr,n-1)+arr[n-1];
//   }
// }

// console.log(arrayQ([1], 0));
// Setup
// var contacts = [
//   {
//       "firstName": "Akira",
//       "lastName": "Laine",
//       "number": "0543236543",
//       "likes": ["Pizza", "Coding", "Brownie Points"]
//   },
//   {
//       "firstName": "Harry",
//       "lastName": "Potter",
//       "number": "0994372684",
//       "likes": ["Hogwarts", "Magic", "Hagrid"]
//   },
//   {
//       "firstName": "Sherlock",
//       "lastName": "Holmes",
//       "number": "0487345643",
//       "likes": ["Intriguing Cases", "Violin"]
//   },
//   {
//       "firstName": "Kristian",
//       "lastName": "Vos",
//       "number": "unknown",
//       "likes": ["JavaScript", "Gaming", "Foxes"]
//   }
// ];


// function lookUpProfile(name, prop){
// // Only change code below this line
// for(var i=0; i<contacts.length; i++){
// if(contacts[i].firstName === name){
//   return contacts[i][prop] || "No such property" ; 
// }
// }
// return "No such contact";

// // Only change code above this line
// }

// console.log(lookUpProfile("Kristian", "ikes"));

// function randomNum(num1, num2){
// var outPUt = Math.random()*(num1-num2+1);
// return Math.floor(outPUt)+num2; 
// }

// console.log(randomNum(10,5));


// function rangeOfNumbers(startNum, endNum) {
//   if(startNum>endNum){
//     return [];
//   } else{
// var val = rangeOfNumbers(startNum, endNum-1);
//   val.push(endNum);
//   return val;
//   }
// };
// console.log(rangeOfNumbers(1,4));
// 'use strict'
// let i = "varb";

// function fen(){
//   let i = "local";
// return i;
// }
// console.log(fen());

// let obj= {
//   name: "chanikya",
//   review: "awesome"
// }
// Object.freeze(obj);
// obj.name = "vijay";
// obj.review = "badass";
// alert(obj);

// function soMany(...args){
// return "you have passed" + args.length + "arguments.";
// }
// console.log(soMany(0,1,2,3));
// console.log(soMany("string", null, [1,2,3],{}));

 
// const sum = (...args) => args.reduce((a, b) => a + b, 0);



// console.log(sum(1,2,4,6));


// const arr =[1,3,5,4,99,55,99,99];
// let spd = arr;
// const maximum = Math.max(...spd);
// let max = arr[0];
// console.log(maximum);

   
// for(let i=0; i<=arr.length; i++){
//   console.log("for loop :",i, " max inital value :", max);
//   if(arr[i]>max){
//     console.log("if loop: ",arr[i],"before max value: ", max)
// max = arr[i];
// console.log(" after arr[i]", arr[i],"value store in max : ", max)
//  }
// }
// return console.log(max);// finding greater value in an array

// const valueX = [1,2,3,4,[2,3,4],[1,2,3,3,[1,3,5,77,33,22]], 9];
// console.log(valueX.flat());
// const flatten = (num)=>num.reduce( 
// (acc, item)=> acc.concat(Array.isArray(item)?flatten(item):item),[])

// console.log(flatten(valueX));
// const fact =(n)=>(n==1) ?  1 : n+fact(n-1)
// console.log(fact(5));
// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// const half = ({max,min})=>{return (max+min)/2.0};


// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["id-blacklist", "no-dup-keys"]
// };
// function makeList(arr) {
//   "use strict";

//   // Only change code below this line
//   const resultDisplayArray = (result)=>{for(let i=0; i<result.failure.length; i++){
//     let newVar = `<li class="text-warning">${result.failure[i]}</li>`;
//     return result.failure.push(newVar);
//   };}
//   // Only change code above this line

//   return resultDisplayArray;
// }

// console.log(  resultDisplayArray = makeList(result.failure));

// function countD(n){
//   let eA = ["k",1,1,2]
//   if(n<=0){
//     return [];
//   }else{
//     eA = countD(n-1);
//     eA.push(n);
//     return eA;
//   }
// }
// console.log(countD(4));


// let arrC = ["k1",2,4,5,66];
// function newFunc(num1x){
//   if(num1x<=0){
//     return 0;
//   }else{
//      newFunc(num1x-1);
//     arrC.push(num1x);
//     return arrC;
//   }
// }
// console.log(newFunc(4));




// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
    
//     main();    
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// /*
//  * Complete the vowelsAndConsonants function.
//  * Print your output using 'console.log()'.
//  */
// function vowelsAndConsonants(s) {
//     for(let i=0; i<=s.lenth; i++){
//         return s;
//     }
// }


// function main() {
//     const s = readLine();
    
//     vowelsAndConsonants(s);
// }




// console.log(vowelsAndConsonants("largenumber"))

// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== 0)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox"));



// function simpleArrAdd(ar){
//   let c =0;
//  for(let i=0;i<ar.length; i++){
   
//    c += ar[i];
   
//  }
//  return c;
// }
// console.log(simpleArrAdd([1,1,2,3,4]))

// class Machine{
//   constructor(machineNumber){
//     this.machineNumber = machineNumber;
//   }
// }

// const idname = new Machine(13880202);



// let a = [1,1,2,3,4,4];
// if((a.length)%2 === 0){
//  return console.log(a);
// }else{
//   return console.log("c");
// }




// function procD(inP) {
//   //Enter your code here
//   let mean = 0;
//   let midIndex1, midIndex2;

//   for(let i =0; i<inP.length; i++){
//       mean = mean+inP[i];
//       if((inP.length)!=0){
//         let inLet = (inP.length)/2;

//           midIndex1 = (((inLet.length)/2)-1);
//           midIndex2 = ((inLet.length)/2);
//       return (mean/inP.length);
//   }
  
      
//           return ((inLet[midIndex1]+inLet[midIndex2])/2);
//       }
//     }

// console.log(procD([1,2,3,4,5,6,7,7,88,5,3,4,3,5,6]));

