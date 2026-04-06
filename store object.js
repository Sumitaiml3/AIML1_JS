var user ={name:"jeet",age:21,city:"delhi"};
localStorage.setItem("user", JSON.stringify(user));
var data=JSON.parse(localStorage.getItem("user"));
console.log(data.name);