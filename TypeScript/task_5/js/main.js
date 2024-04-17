"use strict";
exports.__esModule = true;
exports.sumMinorCredits = exports.sumMajorCredits = void 0;
function sumMajorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits };
}
exports.sumMajorCredits = sumMajorCredits;
function sumMinorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits };
}
exports.sumMinorCredits = sumMinorCredits;
var majorSubject1 = { _majorCreditBrand: undefined, credits: 3 };
var majorSubject2 = { _majorCreditBrand: undefined, credits: 4 };
var sumOfMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log("Sum of Major Credits:", sumOfMajorCredits); // Expected output: { credits: 7 }
var minorSubject1 = { _minorCreditBrand: undefined, credits: 2 };
var minorSubject2 = { _minorCreditBrand: undefined, credits: 5 };
var sumOfMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log("Sum of Minor Credits:", sumOfMinorCredits); // Expected output: { credits: 7 }
