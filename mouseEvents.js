const element = document.getElementById("myH1");
let text = element.getAttribute("class");
document.getElementById("demo").innerHTML=text;

function myFunction(){
    document.getElementById("myH1").setAttribute("class","democlass")
}
        
const heading =document.createElement("h2");

const bodytag=document.getElementsByTagName("body");

bodytag[0].append(heading);
function practice(){
    document.open();
    document.write("<h1>PRACTICE</h1>");
    document.close();
}

function onMouseOver(){
    console.log("On Mouse Over");
}

function onMouseOut(){
    console.log("On Mouse Out");
}

function onMouseMove(){
    console.log("On Mouse Move");
}
const x=document.querySelector('input');
x.addEventListener('focus',onhandlefocus);
x.addEventListener('blur',onhand)