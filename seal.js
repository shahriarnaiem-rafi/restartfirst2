const employee = {
    experence: 1,
    name: 'jankar',
    salary: 25000,
    age: 20
};
// delete empoyee.age;
// delete empoyee.experence;


Object.seal(employee); 
// object ke freeze kore dile tar property gular value change kora jabe na, add kora jabe na, delete kora jabe na.
delete employee['age'];

employee.salary=employee.salary+5000;
employee.location='dhaka';

console.log(employee);