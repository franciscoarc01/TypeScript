function gradingStudents(grades: number[]): number[] {
  // Write your code here
  return grades.map(roundGranding);
}

function roundGranding(grade: number): number {
  if (grade >= 38) {
    let difference = 5 - (grade % 5);
    grade += difference < 3 ? difference : 0;
    return grade;
  }
  return grade;
}
let calification = 5;
let difference = 5 - (calification % 5);
if (calification >= 38) {
  calification = calification + (difference < 3 ? difference : 0);
}

console.log(calification);
