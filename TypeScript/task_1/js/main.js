"use strict";
exports.__esModule = true;
exports.StudentClass = void 0;
var printTeacher = function (firstName, lastName) {
    return firstName.charAt(0) + ". " + lastName;
};
console.log(printTeacher("Melia", "Valentin"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
var student = new StudentClass("John", "Doe");
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working
