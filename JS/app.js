function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "Turkmenistan") {
		correct++;
    }
	if (question2 == "Arabic") {
		correct++;
    }	
    if (question2 == "arabic") {
      correct++;
      }	
  if (question3 == "A transcontinental region connecting Western Asia with North Africa") {
		correct++;
    }	
	
	var pictures = ["../img/celebrate.jpg", "../img/oops.jpg", "../img/Lose.gif"];
	var messages = ["Welldone!", "Have another go!", "Boo!"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " right.";
	document.getElementById("picture").src = pictures[score];
  }
  
//+ Homework Task: Build a Calculator. Write the calculator functions for the following operations
// Sum
// Subtract
// Divide
// Multiply
// Power
// Square Root

