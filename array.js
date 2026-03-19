var myInfo=new Array()  ;
var myInfo1=Array();
console.log(myInfo,myInfo1);
var collection=[
    10,
    "hello",
    true,
    null,
    undefined,
    Symbol("sym"),
    new String("abc"),
    new Date(),
];
console.log(collection);
console.log(collection[0]);
collection.teachername="john mac";
collection.phonenumber =1234567890;
console.log(collection.teachername);
console.log(collection.phonenumber);
console.log(collection.length);
console.log(collection[collection.length-1]);
