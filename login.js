

const logBut = document.getElementById("logBut");
const loginForm = document.getElementById("loginform");
const quizPagee = document.getElementById("quizPage");

logBut.addEventListener('click', (event) => {
  event.preventDefault();
  loginForm.style.display = 'none';
  quizPagee.style.display = '';
  
  });
  
function displayButton() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordLength = password.length;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (firstName != "" && lastName != "" && emailRegex.test(email) && passwordLength > 8 ) {
        document.getElementById("textt").style.display = 'none';
        document.getElementById("logBut").style.display = '';
    } else {    
        document.getElementById("logBut").style.display = 'none';
        document.getElementById("textt").style.display = '';
    }
}
/*questions js*/
const quizPage = document.getElementById("quizPage");
const submitBtn = document.getElementById("submitBtn");
const questionEl = document.getElementById("question");
const option1El = document.getElementById("option1-label");
const option2El = document.getElementById("option2-label");
const option3El = document.getElementById("option3-label");
const option4El = document.getElementById("option4-label");
const options = document.getElementsByName("answer");

const quizQuestions = [
  {
    question: "what is an anchor tag in html?",
    answers: [
      { option: "<anchor> <anchor/>", isCorrect: false },
      { option: "<a> <a/>", isCorrect: true },
      { option: "<anc> <anc/>", isCorrect: false },
      { option: "none of the above", isCorrect: false },
    ],
  },
  {
    question: "which css property is used to make the text in uppercase?",
    answers: [
      { option: "text : uppercase;", isCorrect: false },
      { option: "transform : to-uppercase;", isCorrect: false },
      { option: "text-transform : uppercase;", isCorrect: true },
      { option: "All of the above", isCorrect: false },
    ],
  },
  {
    question: "which tag is used to go back to a new line",
    answers: [
      { option: "<br>", isCorrect: true },
      { option: "<newline>", isCorrect: false },
      { option: "<nl>", isCorrect: false },
      { option: "none of the above", isCorrect: false },
    ],
  },
  {
    question: "which is the latest HTML version?",
    answers: [
      { option: "html5", isCorrect: true },
      { option: "html5.12", isCorrect: false },
      { option: "html6", isCorrect: false },
      { option: "none of the above", isCorrect: false },
    ],
  },
  {
    question: "where can you import a font in html",
    answers: [
      { option: "in the <body></body>", isCorrect: false },
      { option: "in the <head></head>", isCorrect: true },
      { option: "in the <script></script>", isCorrect: false },
      { option: "All of the above", isCorrect: false },
    ],
  },
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  let currentQuizQuestion = quizQuestions[currentQuestion];
  questionEl.textContent = currentQuizQuestion.question;
  option1El.textContent = currentQuizQuestion.answers[0].option;
  option2El.textContent = currentQuizQuestion.answers[1].option;
  option3El.textContent = currentQuizQuestion.answers[2].option;
  option4El.textContent = currentQuizQuestion.answers[3].option;
}

function getSelected() {
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      return i;
    }
  }
  return -1;
}

function resetOptions() {
  options.forEach((option) => (option.checked = false));
}

function checkAnswer(answer) {
  if (quizQuestions[currentQuestion].answers[answer].isCorrect) {
    score++;
  }
}

function showScore() {
  quizPage.innerHTML = `<h2 style="color: #AFAFAF;font-family: 'Rajdhani', sans-serif; text-transform: uppercase;">Your Score: ${score}/${quizQuestions.length}</h2>`;
}

submitBtn.addEventListener("click", () => {
  const selectedOption = getSelected();
  if (selectedOption === -1) {
    alert("Please select an answer!");
    return;
  }
  checkAnswer(selectedOption);
  currentQuestion++;
  if (currentQuestion >= quizQuestions.length) {
    showScore();
  } else {
    displayQuestion();
    resetOptions();
  }
});

displayQuestion();
