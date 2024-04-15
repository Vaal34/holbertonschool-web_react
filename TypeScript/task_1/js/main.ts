export interface Teacher {
    readonly firstName: string;
    readonly astName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function(firstName, lastName){
    return `${firstName.charAt(1)}. ${lastName}`
}

console.log(printTeacher("Melia", "Valentin"))