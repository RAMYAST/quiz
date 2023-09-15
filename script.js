// Questions that will be asked
const Questions = [{
	q: "1.Which of the following was the capital of Chola dynasty?",
	a: [{ text: "Pugalur", isCorrect: false },
	{ text: "Surat", isCorrect: false },
	{ text: "Madurai", isCorrect: true },
	{ text: "Karur", isCorrect: false }
	]

},
{
	q: "2.Which state directed schools and pre university colleges to ensure 10 minutes meditation session?",
	a: [{ text: "Kerala", isCorrect: false, isSelected: false },
	{ text: "Karnataka", isCorrect:true },
	{ text: "Tamil Nadu", isCorrect: false },
	{ text: "Maharastra", isCorrect: false }
	]

},
{
	q: "3.The Pattini cult was established by which Sangam ruler?",
	a: [{ text: "Nedujeliyan, the Pandyan ruler", isCorrect: false, isSelected: false },
	{ text: "Karikala, the Chola ruler", isCorrect: false },
	{ text: "Nedunjeral Adan, the Chera ruler", isCorrect: false },
	{ text: "Senguttuvan, the Chera ruler", isCorrect: true }
	]

},
{
	q: "4.Which is the only authorised bank to issue electoral bonds in India?",
	a: [{ text: "ICICI BANK ", isCorrect: false, isSelected: false },
	{ text: "AXIS BANK", isCorrect: false },
    { text: "STATE BANK OF INDIA", isCorrect: true },
	{ text: "PUNJAB NATIONAL BANK", isCorrect: false }
    ]  
},
{
	q: "5.Which of the following words is not included in the Preamble of the Constitution of India?",
	a: [{ text: "Equality", isCorrect: false, isSelected: false },
    { text: "Intensity", isCorrect: true },
	{ text: "Liberty", isCorrect: false },
	{ text: "Justice", isCorrect: false }

	]

},
{
	q: "6.Which state cabinet has approved to promulgate an ordinance to regulate online gambling?",
	a: [{ text: "Andhra Pradesh", isCorrect: false, isSelected: false },
	{ text:"Karnataka", isCorrect: false },
	{ text: "Kerala", isCorrect: false },
	{ text: "Tamil Nadu", isCorrect: true }
	]

},

{
	q: "7.Which is National animal of INDIA?",
	a: [{ text: "Tiger", isCorrect: true},
	{ text:"Lion", isCorrect: false },
	{ text: "Elephant", isCorrect: false },
	{ text: "Peacock", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;
		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
    
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
