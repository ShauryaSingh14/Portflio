// int x =5 ;
//Loosely typed.or st
// Js is also Dynamically Typed

var num = 16;
var Name = "Shaurya Singh";
var flag = false;
num =  "shaurya";

var x; //declaration
x=5; // initialization
//alert(num);
//document.write(num); 

var a= 389; // right to left 
var b =3;
var c=4
var result = a + b +c; // left to right
var result2 = a + b + "shaurya" +c // left to right
/* Here + operator works as addition operation but after adding string to it 
then it will consider of code as string only */
document.write("<h1>Result is :"+result+"</h1>");
document.write("<h1>Result is :"+result2+"</h1>");
//if - else condtions
document.write("if - else and looping");
var x=2
for(var i =0; i<=4 ; i++){
    if(x%2==0){
        document.write("Even Number \n"+i+"");
        
    }
}

var day =2;

switch(day){
    case 1: document.write("sunday");
    break;
    case 2 : document.write("Monday");
    break;
    default : document.write("Enter Correct Value")
}
var Happy = "shaurya"
switch (Happy+" singh"){
    case "shaurya singh" : document.write("fuck off bitch A");

}
function Addtion2num(a, b){

var total =a+b;
document.write(total);
}