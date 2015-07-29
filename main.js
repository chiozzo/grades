// Create an array of student scores
var scores = [75, 52, 76, 89, 98, 100, 63, 72, 59, 95];

// Create and array of standard letter grades
var letter_grades_counts = [0, 0, 0, 0, 0];
var letter_grades = ["A", "B", "C", "D", "F"]

// Create global variables for grade comparisons
var lowest_score = scores[0];
var highest_score = scores[0];

// Iterate over entire array of scores
for (var i = 0; i < scores.length; i++) {
  // Convert scores into letter grades
  if (scores[i] >= 91 && scores[i] <= 100) {
    letter_grades_counts[0]++;
  } else if (scores[i] >= 81 && scores[i] <= 90) {
    letter_grades_counts[1]++;
  } else if (scores[i] >= 71 && scores[i] <= 80) {
    letter_grades_counts[2]++;
  } else if (scores[i] >= 61 && scores[i] <= 70) {
    letter_grades_counts[3]++;
  } else {
    letter_grades_counts[4]++;
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


// Create global variables for references to DOM elements
var grade_totals = document.getElementById("grade-totals");
var lowest_grade = document.getElementById("lowest-grade");
var highest_grade = document.getElementById("highest-grade");

// Return count of letter grades to DOM
var output = ""
for (var i = 0; i < letter_grades_counts.length; i++) {
  output += "<div>There are " + letter_grades_counts[i] + " " + letter_grades[i];
  if (letter_grades_counts[i] > 1) {
    output += "'s</div>";
  } else {
    output += "</div>";
  }
}

grade_totals.innerHTML = output;
lowest_grade.innerHTML = "<div>The lowest score is " + lowest_score + "</div>";
highest_grade.innerHTML = "<div>The highest score is " + highest_score + "</div>";

// Console log all results
console.log("There are", letter_grades_counts[0], "A's");
console.log("There are", letter_grades_counts[1], "B's");
console.log("There are", letter_grades_counts[2], "C's");
console.log("There are", letter_grades_counts[3], "D's");
console.log("There are", letter_grades_counts[4], "F's");
console.log("The lowest score was", lowest_score);
console.log("The highest score was", highest_score);
