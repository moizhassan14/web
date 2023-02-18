//-------------------------------------Assignment Chapter 14-16---------------------------------------------//
//Question No:1
//Answer:
// var name=[];
//Question No:2
//Answer:
// var name=new Array();
//Question No:3
//Answer:
// var names=['moiz','hassan','ghous','ahmed','zohaib'];
//Question No:4
//Answer:
// var no=[1,2,3,4,5,6];
//Question No:5
//Answer:
// var bol=[true,false,false,true,false];
//Question No:6
//Answer:
// var mix=['moiz',12345,true];
//Question No:7
//Answer:
// var qual=['SSC', 'HSC', 'BCS','BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];
// document.write("<h1>Qualifications</h1>");
// document.write("1)"+qual[0]+"<br>"+"2)"+qual[1]+"<br>"+"3)"+qual[2]+"<br>"+"4)"+qual[3]+"<br>"+"5)"+qual[4]+"<br>"+"6)"+qual[5]+"<br>"+"7)"+qual[6]+"<br>"+"8)"+qual[7]);
//Question No:8
//Answer:
// var names=['Micheal','John','Tony'];
// var marks=[320,230,480];
// var tot=500;
// document.write("Score of "+names[0]+" is "+marks[0]+".Percentage:"+(marks[0]*100)/500+"%<br>");
// document.write("Score of "+names[1]+" is "+marks[1]+".Percentage:"+(marks[1]*100)/500+"%<br>");
// document.write("Score of "+names[2]+" is "+marks[2]+".Percentage:"+(marks[2]*100)/500+"%<br>");
//Question No:9
//Answer:
// var colors=["Red","Blue","Green"];
// document.write("Original Array:"+colors+"<br/>");
// var cAtB=prompt("Enter the color you want to add the begining");
// colors.unshift(cAtB);
// document.write("The Array is:"+colors+"<br/>");
// var cAtE=prompt("Enter the color you want to add at end of an array");
// colors.push(cAtE);
// document.write("The Array is:"+colors+"<br/>");
// colors.unshift("Mustrad","pink");
// document.write("The Array is:"+colors+"<br/>");
// colors.shift();
// document.write("The Array is:"+colors+"<br/>");
// colors.pop();
// document.write("The Array is:"+colors+"<br/>");
// var cIndex=prompt("Enter the index you want to enter the color");
// var cName=prompt("Enter the color name");
// colors.splice(cIndex,0,cName);
// document.write("The Array is:"+colors+"<br/>");
// var cIndex2=prompt("Enter the index you want to delete the color");
// var cDel=prompt("Enter the number of color you wnat to delete");
// colors.splice(cIndex2,cDel);
// document.write("The Array is:"+colors+"<br/>");
//Question No:10
//Answer:
// scores = [87, 92, 68, 95, 83, 78, 88];
// scores.sort(function(a, b) {
//   return a - b;
// });
// console.log(scores);
//Question No:11
//Answer:
// var cities=['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
// document.write("Cities list:"+"<br/>"+cities+"<br/>");
// var selCities=cities.slice(2,4);
// document.write("Selected cities list:"+"<br/>"+selCities);
//Question No:12
//Answer:
// var arr=["This","is","my","cat"];
// var singleArr=arr.join("");
// console.log(singleArr);
//Question No:13
//Answer:
// var arr=[];
// arr.unshift("moniter");
// arr.unshift("printer");
// arr.unshift("mouse");
// arr.unshift("Keyboard");
// document.write("Devices:"+"<br/>"+arr+"<br/>");
// var element1=arr.shift();
// document.write("Out:"+"<br/>"+element1+"<br/>");
// var element2=arr.shift();
// document.write("Out:"+"<br/>"+element2+"<br/>");
// var element3=arr.shift();
// document.write("Out:"+"<br/>"+element3+"<br/>");
// var element4=arr.shift();
// document.write("Out:"+"<br/>"+element4+"<br/>");
//Question No:14
//Answer:
// var arr=[];
// arr.push("Keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("moniter");
// document.write("Devices:"+"<br/>"+arr+"<br/>");
// var element1=arr.pop();
// document.write("Out:"+"<br/>"+element1+"<br/>");
// var element2=arr.pop();
// document.write("Out:"+"<br/>"+element2+"<br/>");
// var element3=arr.pop();
// document.write("Out:"+"<br/>"+element3+"<br/>");
// var element4=arr.pop();
// document.write("Out:"+"<br/>"+element4+"<br/>");
//Question No:15
//Answer:
// var phones=['Apple','Samsung','Nokia','Motorolla','Sony','Oppo'];
// document.write(phones);
//-------------------------------------Assignment Chapter 17-20---------------------------------------------//
//Question No:1
//Answer:
// var str=[[],[]];
//Question No:2
//Answer:
// var str=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(str[0]+"<br>"+str[1]+"<br>"+str[2]);
//Question No:3
//Answer:
// for(var i=1;i<11;i++){
//     console.log(i);
// }
//Question No:4
//Answer:
// var tableNumber = prompt("Enter the table number: ");
// var tableLength = prompt("Enter the table length: ");
// var result="";
// for (var i = 1; i <= tableLength; i++) {
//    result = tableNumber * i;
//   console.log(tableNumber + " x " + i + " = " + result);
// }
//Question No:5
//Answer:
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);}
//Question No:6
//Answer:
// var counting = "";
// for (var i = 1; i <= 15; i++) {
//   counting += i + ", ";
// }
// console.log("Counting: " + counting);
// var reverseCounting = "";
// for (var i = 10; i >= 1; i--) {
//   reverseCounting += i + ", ";
// }
// console.log("Reverse counting: " + reverseCounting);
// var evenNumbers = "";
// for (var i = 0; i <= 20; i += 2) {
//   evenNumbers += i + ", ";
// }
// console.log("Even: " + evenNumbers);
// var oddNumbers = "";
// for (var i = 1; i <= 19; i += 2) {
//   oddNumbers += i + ", ";
// }
// console.log("Odd: " + oddNumbers);
// var series = "";
// for (var i = 2; i <= 20; i += 2) {
//   series += i + "k, ";
// }
// console.log("Series: " + series);
//Question No:7
//Answer:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search for:");
// var found = false;
// for (var i = 0; i < A.length; i++) {
//   if (A[i] === userInput) {
//     found = true;
//     break;
//   }
// }
// if (found) {
//   alert(userInput + " is found in the array.");
// } else {
//   alert(userInput + " is not found in the array.");
// }
//Question No:8
//Answer:
// var A = [24, 53, 78, 91, 12];
// var max = A[0];
// for (var i = 1; i < A.length; i++) {
//   if (A[i] > max) {
//     max = A[i];
//   }
// }
// console.log("The largest number in the array is: " + max);
//Question No:9
//Answer:
// var A = [24, 53, 78, 91, 12];
// var max = A[0];
// for (var i = 1; i < A.length; i++) {
//   if (A[i] < max) {
//     max = A[i];
//   }
// }
// console.log("The smallest number in the array is: " + max);
//Question No:10
//Answer:
// for (var i = 1; i <= 20; i++) {
//     var multiple = i * 5;
//     console.log(multiple);
//   }
//------------------------------------------------------------------------------------------------------//

// var colors=["yellow","green","red"];
// var copy=colors.slice(0,2);
// console.log(copy);
// ['yellow', 'green']
// var names=['moiz','atisham','ghous'];
// names.sort();
// console.log(names);
// var numbers=[1,2,367,9,35,7,55,0];
// numbers.sort();
// console.log(numbers);
// Ans=[0, 1, 2, 35, 367, 55, 7, 9]

// var numbers=[1,2,367,9,35,7,55,0];
// numbers.sort(function(a,b){
//     return a-b;
// });
// console.log(numbers);
// Ans:[0, 1, 2, 7, 9, 35, 55, 367]
// var numbers=[1,2,367,9,35,7,55,0];
// numbers.sort(campareFuntion);
// console.log(numbers);
// function campareFuntion(a,b){
//     // if < 0 a comes first
//     //if = 0 nothing will be changed
//     //if >0 b comes first
//     return a-b;
// }
// var products=[{name:'laptop',price:1000},{name:'desktop',price:1500},{name:'mobile',price:500}];
// products.sort((a,b)=>{
//     return a.price-b.price;
// })
// console.log(products)
// Ans:0
// : 
// {name: 'mobile', price: 500}
// 1
// : 
// {name: 'laptop', price: 1000}
// 2
// : 
// {name: 'desktop', price: 1500};
// var products=[{name:'laptop',price:1000},{name:'desktop',price:1500},{name:'mobile',price:500}];
// products.sort(function(a,b){
//     return b.price -a.price;
// })
// console.log(products)
// 0
// : 
// {name: 'desktop', price: 1500}
// 1
// : 
// {name: 'laptop', price: 1000}
// 2
// : 
// {name: 'mobile', price: 500}
// var no=[13,4,5,6];
// var arr=no.join("");
// console.log(arr);
// LIFO (using push and pop)
// let stack = [];
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.pop()); // Output: 3
// console.log(stack.pop()); // Output: 2
// console.log(stack.pop()); // Output: 1

// // FIFO (using shift and unshift)
// let queue = [];
// queue.unshift(1);
// queue.unshift(2);
// queue.unshift(3);
// console.log(queue.shift()); // Output: 3
// console.log(queue.shift()); // Output: 2
// console.log(queue.shift());
// var names=[];
// names.unshift('moiz');
// names.unshift('hassan');
// names.shift();
// console.log(names);
// var names=[];
// names.push('moiz');
// names.push('hassan');
// names.pop();
// console.log(names);
//--------------------------------------------------------------------------------------------------//
// var names='moiz';
// names=names.toUpperCase();
// alert(names);
// var arr=['moiz','hassan'];
// console.log(arr.join(","));
// var str='moiz-hassan-mughal';
// console.log(str.split("a"));
// var arr=['moiz','hassan',"khan"];
// console.log(arr.reverse().join(" "));
// literal=[];
// object=new Array("");
// fifo=pushand shift
// lifo
//loop for(var i=0;i<10;i++){}
//loop for(intialization;condition;increment){}
// for(var i=20;i<=30;i++){
//     document.write("2 x "+i+"="+2*i+"<br/>")
// }
// var word=prompt("Enter the palindrome word:");
// var b=word.reverse();
// comsole.log(b)
// if(word==b){
//     alert("palindrome")
// }else{
//     alert("not palindrome");
// }