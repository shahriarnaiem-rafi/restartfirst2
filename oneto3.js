// const name="alo world";
// const name2 = name +"my world"   
// console.log(name2);

// const arr=["rafi","rafi2","rafi3"];
// arr.push("rafi4");
// console.log(arr);

// const raf={
//     name:"rafi8",
//     age:20,
//     city:"Dhaka"
// }
// raf.name="rafi9";
// console.log(raf.name);

// function add(a,b=0){
//     const result = a+b;
//     console.log(`${a}  ${b} = ${result}`);
// }
// add(2);


// function mul(a,b=1){
//     const result = a*b;
//     console.log(`${a}  ${b} = ${result}`);
// }
// mul(2);

// const  arrfun =(a,b=0)=>{
//     const result = a+b;
//     console.log(`${a}  ${b} = ${result}`);
// }   
// arrfun(2)

const addition = function (num1, num2) {
    return num1 + num2;
}
console.log(addition(2, 3));
const add2 = (num1, num2) => num1 + num2;
console.log(add2(8, 3));



const fjirstElement = nums => nums[0];
console.log(fjirstElement([1, 2, 3, 4, 5]));



// annymous function
// document.getElementById('').addWventListnere('click',()=>{});
document.getElementById('btn-click').addEventListener('click', event => {
});