//console.log("Hello, World!");
//document.write("Hello, World!");
//var num=10;
/*console.log(num);
console.log(typeof(num));
num =false;
console.log(num);
console.log(typeof(num));
num="Hello, World!";
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
num=undefined;
console.log(num);
console.log(typeof(num));*/
/*const sym1=Symbol(4);
console.log(sym1);
console.log(typeof(sym1));
const sym2=Symbol(4);
console.log(sym2);
console.log(typeof(sym2));
if(sym1===sym2){
    console.log("true");
}
else{
    console.log("false");
}*/
/*var a=100;var b=13;var c=10; 
var linebreak="\n";
document.write("a+b+c=");
document.write(a+b+c);
document.write(linebreak);*/
/*var a=100;var b=20;
var linebreak="<br>";
document.write("a==b)=>");
result=(a==b);
document.write(result);
document.write(linebreak);
document.write("a!=b)=>");
result=(a!=b);
document.write(result);
document.write(linebreak);
document.write("a>b)=>");
result=(a>b);
document.write(result);
document.write(linebreak);
document.write("a<b)=>");
result=(a<b);
document.write(result);
document.write(linebreak);
document.write("a>=b)=>");
result=(a>=b);
document.write(result);
document.write(linebreak);
document.write("a<=b)=>");
result=(a<=b);
document.write(result);*/
/*var count;
document.write("Starting loop: "+"<br>");
for(count=1;count<=10;count++){
    document.write("Count is: "+count+"<br>");
}
document.write("Loop ended.");*/
/*for (key in object) {
    // code block to be executed
}*/
const person = {fname:"Ajay", lname:"Singh", age:25};
for (let x in person) {
    document.write("person details:" + x + ": " + person[x] + "<br>");
}
