// for off arrar khetre
const numbers=[1, 2, 3, 4, 5];
for(const num of numbers){
    // console.log(num);
}




const employee = {
    
    name: 'jankar',
    salary: 25000,
    experence: 1,
    age: 20
};
// for in diye ai kaj kora jay
for(const key in employee){
    const value = employee[key];
    // console.log(key,value);
}
const keys =Object.keys(employee);


console.log(keys);
for(const key of keys){
    const value = employee[key];
    console.log(key, value);
}