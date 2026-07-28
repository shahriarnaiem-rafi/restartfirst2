// const numbers = [6, 9,20,44];
// console.log(numbers);
// //spreed operator
// console.log(...numbers);
// // const max=Math.max(numbers);


// const max=Math.max(...numbers);
// console.log(max);


// const first=[1,2,3,4,5,6];
// const second=first;
// second.push(7);
// console.log(first);



 const first=[1,2,3,4,5,6];

 const second=[...first];
const third=[...first,...second,83,90];
 second.push(7);
// console.log(first);
console.log(third);

// const ages=[33,22,11,4];
// const prices=[100,200,300,400];
// const all=[...ages,55,...prices];
// console.log(all);

// const person={name:'John',age:30};
// const employee={designation: 'dev',...person};
// console.log(employee);



const total=(a,b,c)=>a+b+c;
// const result=total(10,20,30);
const digits=[130,230,302];

console.log(total(...digits));
// console.log(result);
