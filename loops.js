// for (let i = 1; i < 11; i++){
//     console.log(i);
    
// }
// let j = 1;
// while (j < 11) {
//     console.log(j);
//     j++;
    
// }
// const nums = [10, 20, 30, 40, 50]
// for (let i = 0; i < nums.length; i++){
//     console.log(nums[i]);
// }
// for (let i of nums) {   // of can only be used with array[],[{},{},{}]=object array
//     console.log(i);
// }
// const uname = "ABES ENGINEERING COLLEGE"
// for (let i of uname)
//     console.log(i);
// const map = new Map()
// map.set("py","Python")
// map.set("js","Javascript")
// map.set("cpp","C plus plus")
// map.set("java", "Java")
// // for (let i of map)
// //     console.log(i[0]);
// for (const [ext, lname] of map) {
//     // console.log(ext);
// console.log(`The ${lname} has .${ext} extension`);  
// }   
// const Iam = {
//     Name: "Ishita Singh",
//     RollNo: 2300320120117,
//     Branch: "Computer science",
//     Section:"B"
// }
// for (let i in Iam) {
//     console.log(i,Iam[i]);
// }
// for (let i in nums) {            //can print any single object 
//     console.log(nums[i]);
// }
const courses= [
  {
    lang: "C plus plus",
    price: 5000,
  },
  {
    lang: "Javascript",
    price: 4000,
  },
  {
    lang: "Python",
    price: 3000,
  },
  {
    lang: "C",
    price: 5500,
  },
];
// for (let i of labfile) {
//     const { lang, ext } = i;
// //     console.log(`The extension of the ${i.lang} is ${i.ext}`);
//     console.log(lang);   
//foreach is a method of array
//arrayname.foreach 
// labfile.forEach((item) => {
//     console.log(item.lang);
//     console.log(item.ext);
// });
// const prices = [400, 567, 233, 8990, 5995];

// const newprice = (prices, discount) => {
//     const updated = prices.map((price) => {
//         if (price > 1000) return price - (price * discount) / 100;
//         return price;
//     });
//     return updated;
// };
// const updated = newprice(prices, 50);
// // console.log(updated);
// const filter = prices.filter((price => price > 1000));
// console.log(filter);
// const sum = updated.reduce((sum, price) => sum + price, 0)
// console.log("Total Sum:",sum);
// // map,reduce,filter 
const newcourses = courses.filter((course) => course.price > 3500)
const total = newcourses.reduce((sum, course) => sum + course, 0);
console.log(newcourses);
console.log(total);








