//arrow function 
// const hello = () =>  console.log("Ishita");
// hello()
// const sum = (a = 12, b = 13) => console.log(a + b);
// sum()
const diff = (a,b) => (a * b) - (a + b)
console.log(diff(5, 10));
// const sum = (x, y) => (
//     console.log(a + b)
//     console.log(a * b)
//     console.log(a / b)
// )
const sum3 = (...num) => {
    console.log(num);
}
sum3(10, 22);
sum3(10, 33);
sum3(10, 44,89,90);
sum3(10, 568879);
sum3(10, 2865);
sum3();
//IIFE- immediately invoked function expresssion 
(
    () => {
        console.log("IIFE");   
    }
)();
(
    (uname) => {
        console.log(`${uname} has logged in`);
    }
)("Ishita");
  
//if we use curly braces then return keyword will be used 