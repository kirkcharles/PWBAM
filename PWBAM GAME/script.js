const questionText = document.getElementById("question-text");
const optionButtons = document.querySelectorAll(".option-btn");
const fiftyFiftyButton = document.getElementById("fifty-fifty");

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Rome", "Paris", "London", "Madrid"],
    answer: 1,
  },
  {
    question: "Which planet is closest to the sun?",
    options: ["Venus", "Mars", "Earth", "Mercury"],
    answer: 3,
  },
  // Add more questions here
];

let currentQuestion;
let usedFiftyFifty = false;

function startGame() {
  usedFiftyFifty = false;
  fiftyFiftyButton.disabled = false;
  currentQuestion = 0;
  showQuestion();
}

function showQuestion() {
  resetOptionButtons();
  const question = questions[currentQuestion];
  questionText.textContent = question.question;
  question.options.forEach((option, index) => {
    optionButtons[index].textContent = option;
  });
}

function resetOptionButtons() {
  optionButtons.forEach((button) => {
    button.disabled = false;
  });
}

function checkAnswer(answerIndex) {
  if (answerIndex === questions[currentQuestion].answer) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      alert("Congratulations! You've won!");
      startGame();
    }
  } else {
    alert("Incorrect! Game over.");
    startGame();
  }
}

function useFiftyFifty() {
  if (usedFiftyFifty) return;
  usedFiftyFifty = true;
  fiftyFiftyButton.disabled = true;

  const correctAnswer = questions[currentQuestion].answer;
  let removedAnswers = 0;
  while (removedAnswers < 2) {
    const randomIndex = Math.floor(Math.random() * 4);
    if (randomIndex !== correctAnswer && !optionButtons[randomIndex].disabled) {
      optionButtons[randomIndex].disabled = true;
      removedAnswers++;
    }
  }
}

startGame();
