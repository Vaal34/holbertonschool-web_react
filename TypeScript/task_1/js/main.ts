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