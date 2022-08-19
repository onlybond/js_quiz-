var myQuestions = [
	{
		question: "Why is stackup the best platform to learn and earn?",
		answers: {
			a: 'because of the stackup discord community',
			b: 'because of their pretty and hardworking CM Aunt bern ',
			c: 'All of the above'
		},
		correctAnswer: 'c'
	},
	{
		question: "if you are travelling a a speed of 40 km/h and\n accelerating at a rate of 3km.h. and the\n gravity is 10g, what is\n the probability you will survive bern's slipper attack",
		answers: {
			a: 'spot ded',
			b: 'dodge [never an option, still to be fair kek]',
			c: 'will do cpr yourself'
		},
		correctAnswer: 'a'
	},
	{
	question: "what did i do before finding stackup",
		answers: {
			a: 'nothing',
			b: 'nothing',
			c: 'nothing'
		},
		correctAnswer: 'a'
	},
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
		var answers;

		for(var i=0; i<questions.length; i++){
			
			answers = [];

			for(letter in questions[i].answers){

				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		
		var userAnswer = '';
		var numCorrect = 0;
		
		for(var i=0; i<questions.length; i++){

			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			if(userAnswer===questions[i].correctAnswer){
				numCorrect++;
				
				answerContainers[i].style.color = 'lightgreen';
			}
			else{
				answerContainers[i].style.color = 'red';
			}
		}

		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	showQuestions(questions, quizContainer);
	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
