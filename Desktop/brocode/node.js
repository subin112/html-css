//   let pi = 3.1415;
//    let radius;
//    let circumference;

//    radius = window. prompt("Enter the radius of a circle");
//    radius = Number(radius);
// //    PI = 420.69;
//    circumference = 2 * pi * radius
//    console.log("circumference is:")

// let x = 3.14;
// let y = 5;
// let z = 9;
// let maximum;
// let minimum;
// // x = Math.abs(x);
// // console.log(x);
// maximum = math.max(x, y, z);
// minimum = Math.min(x, y, z);
// console.log(maximum)
// console.log("i like pizza");
// // window.alert("i love you");
// let age;
// age = 21
// // console.log(age);
// let students = 20;
// students = students / 2
// console.log(students)
// let username = window.prompt("what is your name")
// // console.log(username)
// let username;

// document.getElementById("myButton").onclick = function(){

//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML = "Hello " + username;
// }
// let a;
// let b 
// let c;
// // let maximum = Math.max(x, y, z);
// // minimum = Math.min(x , y, z);
// // console.log(maximum);
// // // let minimum
// a = window.prompt("Enter side A");
// a = Number(a);
// b = window.prompt("Enter side B");
// b = Number(b);
// c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
// console.log("side c:",c);
document.getElementById("submitButton").onclick = function(){
a = document.getElementById("aTextbox").value;
a = Number(a);
b= document.getElementById("bTextBox").value;
b = Number(b);

c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
document.getElementById("cLabel").innerHTML = "side c: " + c;
}
