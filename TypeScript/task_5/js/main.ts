export interface MajorCredits {
    _majorCreditBrand: void;
    credits: number;
}

export interface MinorCredits {
    _minorCreditBrand: void;
    credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits{
    return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits{
    return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

const majorSubject1: MajorCredits = { _majorCreditBrand: undefined, credits: 3 };
const majorSubject2: MajorCredits = { _majorCreditBrand: undefined, credits: 4 };

const sumOfMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log("Sum of Major Credits:", sumOfMajorCredits); // Expected output: { credits: 7 }

const minorSubject1: MinorCredits = { _minorCreditBrand: undefined, credits: 2 };
const minorSubject2: MinorCredits = { _minorCreditBrand: undefined, credits: 5 };

const sumOfMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log("Sum of Minor Credits:", sumOfMinorCredits); // Expected output: { credits: 7 }
