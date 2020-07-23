// ************************************* Chapter 38 to 42 *************************************
// ------------------------------------- Question 1 -------------------------------------

// var input = prompt("Enter the number and a power?","5 , 3"),
//      firstNo = parseInt(input.split(",")[0]),
//      secondNo = parseInt(input.split(",")[1]);

//      powerFun(firstNo,secondNo);
// function powerFun(firstNo,secondNo){
//     var power = firstNo;
//     for(var i = 1; i < secondNo; i++){
//      power*= firstNo;
//     }
//     document.write(firstNo+"^"+secondNo+" = "+power);


// }

// ------------------------------------- Question 2 -------------------------------------
// var input = prompt("Enter the Year?","2000");
// var year = parseInt(input);
// leapYear(year);
// function leapYear(year){
// if(year%400 == 0){
//     document.write(year+" is a leap year!")
// }
// else if(year%100 == 0){
//     document.write(year+" is a not a leap year!")
// }
// else if(year%4 == 0){
//     document.write(year+" is a leap year!")
// }
// else{
//     document.write(year+" is a not a leap year!")
// }
// }

// ------------------------------------- Question 3 -------------------------------------
//area of triangle formula is wrong in question right one is sqrt(s*(s-a)(s-b)(s-c))

// var input = prompt("Enter the three sides of a triangle?","5 , 4 , 2"),
//      firstSide = parseInt(input.split(",")[0]),
//      secondSide = parseInt(input.split(",")[1]),
//      thirdSide = parseInt(input.split(",")[2]);

//      areaOfTriangle(firstSide,secondSide,thirdSide,calS(firstSide,secondSide,thirdSide));
//      function calS(a,b,c){
//          var S= (a+b+c)/2;
//          return S;

//      }

//      function areaOfTriangle(a,b,c,s){
//          var areaTri = Math.sqrt(s*(s-a)*(s-b)*(s-c));
//         document.write("The area of triange is "+areaTri);
//      }

// ------------------------------------- Question 4 -------------------------------------
// var input = prompt("Enter the three sides of a triangle?","81 , 67 , 73"),
//      firstSub = parseInt(input.split(",")[0]),
//      secondSub = parseInt(input.split(",")[1]),
//      thirdSub = parseInt(input.split(",")[2]);

//      mainFunction(averageOfSub(firstSub,secondSub,thirdSub),percentage(firstSub,secondSub,thirdSub));

//      function mainFunction(average,percentage){
//         document.write("The average of 3 subjects is "+average+"<br>"+"The percentage is "+percentage);
//      }

//      function averageOfSub(firstSub,secondSub,thirdSub){
//          var average = (firstSub+secondSub+thirdSub)/3;
//          return average.toFixed(2);

//      }

//      function percentage(firstSub,secondSub,thirdSub){
//          var percentage = ((firstSub+secondSub+thirdSub)/300)*100;
//          return percentage.toFixed(2);

//      }

// ------------------------------------- Question 5 -------------------------------------
// var input = prompt("Enter the word/string?","hello");
// var input1 = input.toLowerCase();
// var arr = {};
// arr = input1.split("");
// var char = prompt("Enter any character from your input word/string whose index you want to find?");
// var char1 = char.toLowerCase();
// var codeChar = char1.charCodeAt(0);
// var notFound = 0;

// findIndex(codeChar,notFound,arr,char,input);

// function findIndex(codeChar,notFound,arr,char,input){
// for (var i=0 ; i< arr.length ; i++ ){
//     if(codeChar === arr[i].charCodeAt())
//     {
//        document.write("The character '"+char+"' in the word/string '"+input+"' is at the index "+i+
//        " (index starts from 0)<br><b>Note: </b><i>For same characters it will tell the index of character which will come first in the string</i>");
//        notFound = 1
//        break;
//     }


// }
// if(notFound == 0){
//     document.write("We are Sorry! The character '"+char+"' is not in the word/string '"+input+"'");

// }
// }

// ------------------------------------- Question 6 -------------------------------------
// var input = prompt("Enter the word/string?","hello");
// var input1 = input.toLowerCase();
// var arr = {};
// arr = input1.split("");
// var notFound=0;
// deleteVowel(arr,notFound,input);

// function deleteVowel(arr,notFound,input){
// for (var i=0 ; i< arr.length ; i++ ){
//     if((arr[i].charCodeAt() == 97) || (arr[i].charCodeAt() == 101) || (arr[i].charCodeAt() == 105)
//      || (arr[i].charCodeAt() == 111) || (arr[i].charCodeAt() == 117))
//     {
//        arr.splice(i,1,"");
//        notFound = 1;
//     }

// }
// if(notFound == 0){
//     document.write("We are Sorry! No vowel is found in the input word/string '"+input+"'");

// }
// else{
//     document.write("<b>Before : </b>'"+input+"'<br><b>After : </b>'"+arr.join("")+"'");


// }
// }

// ------------------------------------- Question 7 -------------------------------------
// function findOccurrences() {
//     var input = prompt("Enter a string?","Pleases read this application and give me gratuity");
//     var chars = input.toLowerCase().split("");
//     document.write("Your input string is '"+input+"'<br>Such occurances are ");
//     // Loop over every character
//     for(let i = 0; i < chars.length - 1; i++) {
//       var char = chars[i];
//       var next = chars[i + 1];

//       if(isVowel(char) && isVowel(next)) {
//         document.write(char+next+",");
//       }
//     }

//   }

//   function isVowel(char) {
//     switch (char) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         return true;
//       default:
//         return false;
//     }
//   }


// findOccurrences();

// ------------------------------------- Question 8 -------------------------------------
// var input = parseInt(prompt("Enter the distance between two cities?", "20km"));
// toMeters(input);
// toCentimeters(input);
// toInches(input);
// toFeet(input);
// function toMeters(input) {
//     var meter = input * 1000;
//     document.write(input + "km = " + meter + " meters<br>");
// }

// function toCentimeters(input) {
//     var cm = input * 100000;
//     document.write(input + "km = " + cm + " centimeters<br>");
// }

// function toInches(input) {
//     var inch = input * 39370.1;
//     document.write(input + "km = " + inch + " inches<br>");
// }

// function toFeet(input) {
//     var feet = input * 3280.84;
//     document.write(input + "km = " + feet + " feets<br>");
// }

// ------------------------------------- Question 9 -------------------------------------
// var input = parseInt(prompt("Enter the working hours?", "60"));
// var ovPay;
// overtimePay(input,ovPay);

// function overtimePay(input,ovPay){
//     var ovTime;

//     if(input>40){
//         ovTime = input-40;
//         ovPay = ovTime*12;
//         document.write("Overtime Pay is "+ovPay);
//     }

//     else{
//         document.write("You have to work for more than 40 hours to get over time pay");

//     }

// }

// ------------------------------------- Question 10 -------------------------------------
// var input = parseInt(prompt("Enter the amount for withdraw?", "1255"));
// withdraw(input);

// function withdraw(input){
//     document.write("Amount for withdraw is "+input+"<br>You will have "+parseInt((input/100))+" hundred(s) notes "+parseInt(((input%100)/50))
//     +" fifty note(s) "+parseInt((((input%100)%50)/10))+" ten note(s) <br>"+"Remaining Amount : "+parseInt((((input%100)%50)%10))+" rupees");
// }

// ************************************* Chapter 43 to 48 *************************************
// ------------------------------------- Question 1 -------------------------------------
// document.write('<a href="JavaScript:void(0)" onClick="popup();">Click</a>');
// function popup(){
//     alert("Hello! Welcome");
// }

// ------------------------------------- Question 2 -------------------------------------
// document.write('<h1 style="color:blue;">Mobile Phone Lookup</h1><img src="download.jpg" width="220" height="277" alt="The Scream" onClick="popUp()">'+
// '<img src="2.jpg" width="220" height="277" alt="The Scream" onClick="popUp()">'+
// '<img src="3.png" width="220" height="277" alt="The Scream" onClick="popUp()">'+
// '<img src="4.png" width="220" height="277" alt="The Scream" onClick="popUp()">');
// document.write('<br><cite style="padding-left:5em; color:blue;">Samsung s5</cite>'+
// '<cite style="padding-left:8em; color:blue;">Huawei y5</cite>'+
// '<cite style="padding-left:10em; color:blue;">Samsung 5s</cite>'+
// '<cite style="padding-left:10em; color:blue;">Nokis s5</cite>');

// function popUp(){
//     alert("Thanks for purchasing a phone from us")

// }

// ------------------------------------- Question 3 -------------------------------------
// var names = ["Jone","Doe","Mark","James","amna","ali","rubab","samina","hussan","haris"];
// var classes = ["10","9","10","8","9","8","7","8","9","10"];
// document.write("<table id='myTable'><tr><th>Index</th><th style='padding-left:3em;'>Name</th><th style='padding-left:3em;'>Class</th></tr>");
// for (var i=0; i<names.length; i++){
// document.write("<tr><td>"+i+"</td><td style='padding-left:3.7em;'>"+names[i]+"</td><td style='padding-left:3.3em;'>"+classes[i]+"</td>"+
// "<td style='padding-left:3.3em;'><button onClick = 'deleteRow(this)'>Delete</button></td></tr>");
// }
// document.write("</table>");
// function deleteRow(btn) {
//     var row = btn.parentNode.parentNode;
//     row.parentNode.removeChild(row);
//   }

// ------------------------------------- Question 4 -------------------------------------
// document.write('<img  id = "demo" onmouseover="chngImg(this)" onmouseout="normal(this)" border="0" src="4.png" alt="mobile" width="552" height="552">');

// function chngImg() {
//     document.getElementById("demo").src = "3.png";
// }


// function normal() {
//     document.getElementById("demo").src = "4.png";
    
// }

// ------------------------------------- Question 5 -------------------------------------
// document.write("<h2 style='text-align:center;'>Counter</h2><h1 id='demo' style='text-align:center;'>0</h1>");
// document.write('<button type="button" onclick="add()" style="margin-left:51.5em; padding:1em;">Increase</button>');
// document.write('<button type="button" onclick="del()" style="padding:1em; margin-left:1em;">Decrease</button>');


// var clicks=0;
// function add() {
//     clicks += 1;
//     document.getElementById("demo").innerHTML = clicks;
// }


// function del() {
//     clicks -= 1;
//     document.getElementById("demo").innerHTML = clicks;
// }

// ************************************* Chapter 49 to 52 *************************************
// ------------------------------------- Question 1 -------------------------------------