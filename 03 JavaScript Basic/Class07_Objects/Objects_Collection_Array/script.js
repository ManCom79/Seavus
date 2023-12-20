let students = []

let button = document.getElementById("button")

button.addEventListener("click", function() {
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let age = document.getElementById("age").value
    console.log(firstName, lastName, age);
    let newStudent = new student(firstName, lastName, age)
    console.log(newStudent);
    students.push(newStudent)
    console.log(students);
    firstName = document.getElementById("firstName").value = ""
    lastName = document.getElementById("lastName").value = ""
    age = document.getElementById("age").value = ""
    return students
})

function student (name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age
}