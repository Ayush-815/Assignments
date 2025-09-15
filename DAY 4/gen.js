document.addEventListener('DOMContentLoaded', function() {
   const students = [
    { name: "Dipendra Bhandari", age: 30 },
    { name: "Bishal Babu Bohara", age: 12 },
    { name: "Ashok Giri", age: 18 },
    { name: "Rajan Shrestha", age: 29 },
    { name: "Bibek G.T.", age: 8 },
    { name: "Jenish Prajapati", age: 13 },
    { name: "Prabesh Dhital", age: 20 },
    { name: "Bishal Bomjan", age: 32 },
    { name: "Suraj Maharjan", age: 9 },
    { name: "Ayush Acharya", age: 21 },
    { name: "Anusha Chalise", age: 31 },
    { name: "Dipika Prajapati", age: 28 },
    { name: "Sushant Bhattarai", age: 15 },
    { name: "Roman Kasichhwa", age: 23 },
    { name: "Rujal Spakota", age: 34 }
];


    const updatedStudents = students.map(student => ({
        ...student,
        isGenZ: student.age >= 13 && student.age <= 28
    }));

    const nameOnly = updatedStudents.map(student => student.name);
    document.getElementById("names-list").innerHTML = nameOnly.map(name => `<li>${name}</li>`).join("");

    const ageless10 = updatedStudents.filter(student => student.age < 10);
    document.getElementById("age-less-than-10").innerHTML = ageless10.map(student => `<li>${student.name} - Age: ${student.age}</li>`).join("");

    const avgAge = updatedStudents.reduce((sum, student) => sum + student.age, 0) / updatedStudents.length;
    document.getElementById("average-age").innerText = avgAge.toFixed(2);

    const allGenZ = updatedStudents.every(student => student.isGenZ);
    document.getElementById("all-gen-z").innerText = allGenZ ? "Yes" : "No";

    const genZStudents = updatedStudents.filter(student => student.isGenZ);
    document.getElementById("gen-z-students").innerHTML = genZStudents.map(student => `<li>${student.name} - Age: ${student.age}</li>`).join("");
});
