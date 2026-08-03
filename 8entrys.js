const employee={
    name:"John",
    designation:"Software Engineer",
    salary:50000,
    experience:5,
}

// keys mane object ar property gular name ke array ar moto return kore.
// values mane object ar property gular value ke array ar moto return kore.\
// entries mane object ar property gular name and value ke array ar moto return kore.
const keys=Object.keys(employee);
console.log(keys);  
const values=Object.values(employee);
console.log(values);  

const entries=Object.entries(employee); 
console.log(entries);