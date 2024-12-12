// let a = Symbol(10)
// console.log(a);
// let b = Symbol(10);
// console.log(b);

// console.log(a==b);// value should be same datatype can be different 
// console.log(a===b);// datatype and value should be same 
// console.log(typeof a );
// console.log(typeof b);
let studs = ['abc', 'def', 'ghi',23,false,'Ishita']
console.log(studs);
// console.log(typeof studs);
//console.table(studs);
// console.log(studs[1]);
// console.log(studs[-2]);// negative indexing not working 
studs.push("SITA"); //append at last
console.log(studs); 
studs.unshift("GITA"); //add at first
console.log(studs);
studs.pop(); //remove from last
console.log(studs);
studs.shift(); //remove from first
console.log(studs);
console.log(studs.includes("abc"));
console.log((studs.indexOf("abc")));
const abc = studs.join();//converts array into string
console.log(abc);









