import { Employee, Person, Student } from "./classes";

const personA = new Person('Jane', new Date('2000'))

// personA.name = 'Al' // Erro!
personA.name = 'Janice';
console.log(personA.name);

// personA.birthDate = new Date('1900') // Erro!
personA.birthDate = new Date('1950');
console.log(personA.birthDate);

console.log();

const studentA = new Student('John', new Date('1998'));

const newEnrollment = studentA.generateEnrollment();
studentA.enrrolment = newEnrollment;
studentA.examesGrades = [2, 8, 5, 6];
studentA.worksGrades = [7, 8];

console.log(studentA.name);
console.log(studentA.birthDate);
console.log(studentA.enrrolment);
console.log(studentA.gradesAverage());

console.log();

const employeeA = new Employee('Mark', new Date('1981'), 2000);

employeeA.registration = employeeA.generateRegistration();

console.log(employeeA.name);
console.log(employeeA.birthDate);
console.log(employeeA.registration);
