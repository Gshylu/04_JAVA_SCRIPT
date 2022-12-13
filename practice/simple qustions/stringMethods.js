
//1The charAt() method returns the character at the specified index in a string.
//syntax = str.charAt(index) .. if any parameter is not given by default returns index 0 value

/*function output(str){
  var  output = str.charAt(8);
  console.log(output)
}output("Good Morning")
*/

//2.The codePointAt() method returns an integer that denotes the Unicode point value of a character in the string.
//str.codePointAt(pos) 

/*function output(str){
  var  output = str.codePointAt(0);
  console.log(output)
}output("Good Morning")
*///it will return a unicode 

//3.The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
//syntax : str.charCodeAt(index)

/*
function output(str){
  var  output = str.charCodeAt(1);
  console.log(output)
}output("Good Morning")
*/


//4.The concat() method concatenates given arguments to the given string
//syntax : str.concat(str1, ..., strN)
/*
function str(str){

  var join = str.concat("are you okay.... "," how are you?")
  console.log(join)

}str("hello...")

*/

//5.The endsWith() method returns true if a string ends with the specified string. If not, the method returns false.
//syntax:str.endsWith(searchString, length)
/*
function str(str){

  var output = str.endsWith("fun")
  console.log(output)

}str("Good fun")
*/

//6.The fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
//String.fromCharCode(num1, ..., numN)
/*
let str = String.fromCharCode(72, 69, 76, 76, 79);
console.log(str);
*/

//7.The fromCodePoint() method returns a string created by using the given sequence of unicode code points.
//syntax : String.fromCodePoint(num1, ..., numN)
/*
let str = String.fromCodePoint(72, 69, 76, 76, 79);
console.log(str);

*/

//8.The includes() method checks if one string can be found inside another string.
//syntax:str.includes(searchString, position)
/*
function str(str){

  var ele = str.includes("are" ,0)
  console.log(ele)

}str("are you okay")

*/

//9.The string indexOf() method returns the index of the first occurence of the substring in a string
//  syntax:str.indexOf(searchValue, fromIndex)
/*
function str(str){

  var ele = str.indexOf("?",11)
  console.log(ele)

}str("are you okay ? ")

*/

//10.The lastIndexOf() method returns the last index of occurence of a given substring in the string.
//syntax :str.lastIndexOf(searchValue, fromIndex)
/*
function str(str){
  var substr = "?"
  var ele = str.lastIndexOf(substr)
  console.log(ele)

}str("are you okay ? ")*/


//11.The length property returns the number of characters in a string.
// syntax : str.length
/*
function str(str){

  var ele = str.length
  console.log(ele)

}str("are you okay ?")
*/


//The localeCompare() method checks if a given string comes before, after, or is equivalent as another string in sort order.
//syntax:str.localeCompare(compareStr, locales, options)

/*
function str(str1,str2){
  let ele = str1.localeCompare(str2);
  console.log(ele)

}str("A","B")
str("No","No")
str("B","A")
*/

//The match() method returns the result of matching a string against a regular expression.
//syntax : str.match(regexp)
/*
function str(str){
 
  var exp = /code/;
  var result = str.match(exp)
  console.log(result)

}str("javaScript my code any code ")*/
