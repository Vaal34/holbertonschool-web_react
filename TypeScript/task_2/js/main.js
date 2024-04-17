"use strict";
exports.__esModule = true;
exports.teachClass = exports.executeWork = exports.isDirector = exports.createEmployee = exports.Teacher = exports.Director = void 0;
exports.Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
exports.Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (salary < 500) {
        return new exports.Teacher;
    }
    else {
        return new exports.Director;
    }
}
exports.createEmployee = createEmployee;
// Utilisation de 'is' pour vérifier si 'employee' est une instance de 'DirectorInterface'
function isDirector(employee) {
    // Convertiion de l'objet employee en type DirectorInterface avec 'as'
    return employee.workDirectorTasks !== undefined;
}
exports.isDirector = isDirector;
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
exports.executeWork = executeWork;
function teachClass(todayClass) {
    if (todayClass === "Math" || todayClass === "History") {
        return "Teaching " + todayClass;
    }
}
exports.teachClass = teachClass;
var director = new exports.Director();
console.log(isDirector(director));
var teacher = new exports.Teacher();
console.log(isDirector(teacher));
var employee1 = createEmployee(300);
var employee2 = createEmployee(900);
console.log(executeWork(employee1));
console.log(executeWork(employee2));
var teachMath = teachClass("Math");
var teachHistory = teachClass("History");
console.log(teachMath);
console.log(teachHistory);
