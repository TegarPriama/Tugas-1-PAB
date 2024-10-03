console.log("------ Destructuring ------");

let items = ["Table", "Handphone", "Computer"];

let item1 = items[0];
let item2 = items[1];
let item3 = items[2];

console.log(item1);
console.log(item2);
console.log(item3);

let [item_1, item_2, item_3] = items;

console.log(item_1);
console.log(item_2);
console.log(item_3);

let student = {
    name: "Ahmad",
    age: 22,
    department: "Information System"
};

let studentName = student.name;
let studentAge = student.age;
let studentDepartment = student.department;

console.log(studentName);
console.log(studentAge);
console.log(studentDepartment);

let { name, age, department } = student;

console.log(name);
console.log(age);
console.log(department);

let { name: objectName, age: objectAge, department: objectDepartment } = student;

console.log(objectName);
console.log(objectAge);
console.log(objectDepartment);

const studentData = () => {
    return { name: "Roni", age: 19, department: "Information System" };
};

let { 
    name: studentNameData, 
    age: studentAgeData, 
    department: studentDepartmentData 
} = studentData();

console.log(studentNameData);  
console.log(studentAgeData); 
console.log(studentDepartmentData);
