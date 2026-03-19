var count =0;
document.write("Starting the loop" + "<br>");
for(count=0;count<5;count++){
    document.write("currentcount"+count+"<br>");
}
document.write("Loop ended");
const person={
    name:"John",
    age:30,
    city:"New York"
};
for(let x in person){
    document.write("person details :" + x + " : " + person[x] + "<br>");
}
for(let x in person){
    document.write("person details :" + x + " : " + person.x + "<br>");
}
var count=0;
document.write("Starting the loop" + "<br>");
while(count<5){
    document.write("currentcount"+count+"<br>");
    count++;
}
var age=20;
if (age<18){
    document.write("<b>you are eligible to vote</b>");   
}
else{
    document.write("<b>you are a minor</b>");
}
var grade="A";
document.write("Your grade is: " + grade + "<br>");
switch(grade){
    case 'A' : document.write("Good job!<br/>");
    break;
    case 'B' : document.write("Pretty good!<br/>");
    break;
    case 'C' : document.write("Passed!<br/>");
    break;
    case 'D' : document.write("Not so good!<br/>");
    break;
    case 'F' : document.write("Failed!<br/>");
    break;
    default : document.write("Invalid grade!<br/>")
}
document.write("Exiting switch block");