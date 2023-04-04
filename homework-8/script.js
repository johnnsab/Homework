// From the base FC Human, you need to implement inheritance for FC Teacher and FC Student

// 1. Create FC Human, which accepts an object as arguments and creates properties name, surname and age. FC Human also contains methods:
// getFullName() - returns the full name string formed from name, surname,
// setFullName(fullName) - splits the string into name, surname
// The surname, name and age properties must be present in all FCs. Eliminate duplication with context substitution.

// 2. Create FC Student, which I can use as follows:

// let s = new Student(info) // where info.marks = [10,9,8,1,10] and all other properties name, age ...
// Every student should have such methods
// getAverageMark() - returns the average mark
// getMinMark() - returns the smallest mark
// getMaxMark() - returns the maximum mark

// 3. Create a Teacher FC that accepts an object as an argument and creates a group property (an array of at least 5 students created using the Student FC) and contains methods:
// - getListOfNamesByAverageMark() - returns an array of student names sorted by the highest average mark.
// - getStudentByName(name) - get one student object by name.
// - removeStudentByName(name) - remove the student object found by name.
// - updateStudentByName(new Student(...), name) - find the student object by name and replace it with student (a new instance of FC Student)

// (FC - constructor function)

// FC Human constructor function
function Human(obj) {
  this.name = obj.name;
  this.surname = obj.surname;
  this.age = obj.age;
}

Human.prototype.getFullName = function () {
  return this.name + " " + this.surname;
};

Human.prototype.setFullName = function (fullName) {
  let [name, surname] = fullName.split(" ");
  this.name = name;
  this.surname = surname;
};

// Student constructor function
function Student(obj) {
  Human.call(this, obj);
  this.marks = obj.marks;
}

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype.getAverageMark = function () {
  return this.marks.reduce((a, b) => a + b) / this.marks.length;
};

Student.prototype.getMinMark = function () {
  return Math.min(...this.marks);
};

Student.prototype.getMaxMark = function () {
  return Math.max(...this.marks);
};

// FC Teacher constructor function
function Teacher(obj) {
  Human.call(this, obj);
  this.group = obj.group.map((student) => new Student(student));
}

Teacher.prototype = Object.create(Human.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.getListOfNamesByAverageMark = function () {
  return this.group
    .sort((a, b) => b.getAverageMark() - a.getAverageMark())
    .map((student) => student.name);
};

Teacher.prototype.getStudentByName = function (name) {
  return this.group.find((student) => student.name === name);
};

Teacher.prototype.removeStudentByName = function (name) {
  const index = this.group.findIndex((student) => student.name === name);
  if (index !== -1) {
    this.group.splice(index, 1);
  }
};

Teacher.prototype.updateStudentByName = function (newStudent, name) {
  const index = this.group.findIndex((student) => student.name === name);
  if (index !== -1) {
    this.group[index] = new Student(newStudent);
  }
};
