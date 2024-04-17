interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

export const Director = class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home"
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }
    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

export const Teacher = class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    }
    getCoffeeBreak(): string {
        return "Cannot have a break"
    }
    workTeacherTasks(): string {
        return "Getting to work"
    }
}

export function createEmployee(salary: number | string): TeacherInterface | DirectorInterface {
    if(salary < 500) {
        return new Teacher;
    } else {
        return new Director;
    }
}

// Utilisation de 'is' pour vérifier si 'employee' est une instance de 'DirectorInterface'
export function isDirector(employee: DirectorInterface | TeacherInterface): employee is DirectorInterface {
    // Convertiion de l'objet employee en type DirectorInterface avec 'as'
    return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
    if (isDirector(employee)){
        return employee.workDirectorTasks()
    } else {
        return employee.workTeacherTasks()
    }
}

export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string{
    if (todayClass === "Math" || todayClass === "History"){
        return `Teaching ${todayClass}`;
    }
}

const director = new Director();
console.log(isDirector(director)); 

const teacher = new Teacher();
console.log(isDirector(teacher));

const employee1 = createEmployee(300);
const employee2 = createEmployee(900);
console.log(executeWork(employee1));
console.log(executeWork(employee2));

const teachMath = teachClass("Math");
const teachHistory = teachClass("History");

console.log(teachMath);
console.log(teachHistory);
