//OBJECTS
let stud = {
    gender: 'female',
    "Full name": "ISHITA SINGH", //use double quotes when we want to write with spaces b/w words
    email: "singhishita481@gmail.com",
    age: 20,           //double quotes are not required for numeric value & boolean values only for string 
    location: "Ghaziabad",
    loginDays: ['Mon', 'Tues', 'Wed'],
    isLogin: true,
};
console.log(stud);
stud.name = 'ISHITA'
console.log(stud);
console.table(stud);
stud.name = "Mahi Singh";
// console.log(stud);
// console.table(stud);
// console.log(stud.age);
// console.log(stud["Full name"]);
// console.log(stud["email"]);
// console.log(stud["Full name"]);
// console.log(stud["Full name"]);
if (!stud.isLogin) {
    console.log(stud.loginDays);
}
// in anything except FALSE ,NULL is TRUE in JS
if (stud.mobile) {
    console.log("Mobile is given");
}
if (stud.email) {
    console.log(stud.email);
}
let T1;
if (T1) {
    console.log("T1 exists");
    
}
else {
    console.log("T1 does not exist");
    
}
stud.greeting = () => console.log("Hello");
stud.greeting()


//== compares values only
//=== compares values and type 


// anything in curly brackets is an object