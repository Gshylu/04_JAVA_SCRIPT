

//1 find area of reactangle  formula:L*W?
/*
function getRectangleArea(length, width) {
  return length*width;
}

let area = getRectangleArea(20,30);

console.log(area);
*/

//2.find ASCII value of a character?
/*
function str(str){

  var ele = str.charCodeAt(0);
  console.log(ele)

}str("A")
*/

//3.Convert Celsius to Fahrenheit ?
/*
function input(num){
var Celsius = (num * 1.8)+32 + " Fahrenheit";
var Fahrenheit = ((num-32) * 5/9)+" Celsuis"
console.log(Celsius)
console.log(Fahrenheit)
}input(1)
*/

//4.Swap value of two variables?
/*
var A = 1;
var B = 2;
//[A , B] = [B,A]
//console.log(A,B)

or

var ele = A;
A = B;
B = ele;
console.log(A,B)
*/

// 5.Check the given number is odd or even 
/*
for(let i=1;i<10;i++){
if ((i % 2) == 0){

   console.log(i + "...even")

}
if ((i % 2) == 1){
  console.log(i + " ...odd")
}
}
*/
//6. check wheater the char is vowel or consonent
/*
function char(input , arr1){

  if(input=='a' || input=='e' || input=='i' || input=='o' || input=='u'){
    console.log(input+" it is an vowel")
  }else{
    console.log(input +" it is an consonent")
  }

}char("Z" , ["a","i","o","u","e"])*/

//7.Find largest among three numbers?
/* 
function str(num1 , num2 , num3 ){

  if((num1 >= num2 ) && (num1 >= num3)){
    console.log(num1)
  } if((num2 >= num1 ) && (num2 >= num3)){
    console.log(num2)
  }
  if((num3 >= num1 ) && (num3 >= num2)){
    console.log(num3)
  }

  console.log(".....")


  var ele = Math.max(num1 , num2 , num3 )
  console.log(ele)
 

}str(1, 3 , 1)  */

//

//8.Leap year checking?
/*

function leapYear(year) {
    if(year % 4 == 0 && year % 100 != 0){
       console.log(year + " is leap not  year")
    }else if(year % 400 == 0){
      console.log(year + " is leap year")
    }
  

}

leapYear(2020);
*/

//9.Positive negative checking?
/*
function num(input){

  if(input < 0){
    console.log(input + " negitive")
  }if(input >= 0 ){
    console.log(input + " positive")
  }

}num(2)
*/

//10 
function solve(a,b,c){
  var result = (((-1*b) + Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
  var result2 = (((-1*b) - Math.sqrt(Math.pow(b,2)) - (4*a*c))/(2*a));
  
  return result + "<br>" + result2;
}

document.write( solve(1,1,-1) );

