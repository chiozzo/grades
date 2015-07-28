// Create an array of student scores and standard letter grades
var scores = [75, 52, 76, 89, 98, 100, 63, 72, 59, 95];
var letter_grades = [A, B, C, D, F]

// Create a way to track the count of each grade
var countA = 0;
var countB = 0;
var countC = 0;
var countD = 0;
var countF = 0;

// Create global variables for grade comparisons
var lowest_score = scores[0];
var highest_score = scores[0];

// Iterate over entire array of scores
for (var i = 0; i < scores.length; i++) {
  // Convert scores into letter grades
  if (scores[i] >= 91 && scores[i] <= 100) {
    countA++;
  } else if (scores[i] >= 81 && scores[i] <= 90) {
    countB++;
  } else if (scores[i] >= 71 && scores[i] <= 80) {
    countC++;
  } else if (scores[i] >= 61 && scores[i] <= 70) {
    countD++;
  } else {
    countF++;
  };
  // Determine lowest score
  if (scores[i] < lowest_score) {
    lowest_score = scores[i];
  }
  // Determine highest score
  if (scores[i] > highest_score) {
    highest_score = scores[i];
  }
}

// Console log all results
console.log("There are", countA, "A's");
console.log("There are", countB, "B's");
console.log("There are", countC, "C's");
console.log("There are", countD, "D's");
console.log("There are", countF, "F's");
console.log("The lowest score was", lowest_score);
console.log("The highest score was", highest_score);

// Create global variables for DOM elements
var grade_totals = document.getElementById("grade-totals");
var lowest_grade = document.getElementById("lowest-grade");
var highest_grade = document.getElementById("highest-grade");

// Return count of letter grades to DOM

for (var i = 0; i < letter_grades.length; i++) {
  grade_totals.innerHTML = "<div>There are " +  +  + "'s</div>"
}

lowest_grade.innerHTML = "<div>" + lowest_score + "</div>";
highest_grade.innerHTML = "<div>" + highest_score + "</div>";
