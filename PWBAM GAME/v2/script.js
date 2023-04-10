const questionText = document.getElementById("question-text");
const optionButtons = document.querySelectorAll(".option-btn");
const fiftyFiftyButton = document.getElementById("fifty-fifty");
const phoneButton = document.getElementById("phone");
const audienceButton = document.getElementById("audience");

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
let usedPhone = false;
let usedAudience = false;

function startGame() {
  usedFiftyFifty = false;
  fiftyFiftyButton.disabled = false;
  usedPhone = false;
  phoneButton.disabled = false;
  usedAudience = false;
  audienceButton.disabled = false;
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
  button.style.fontWeight = "";
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
  
  function usePhone() {
  if (usedPhone) return;
  usedPhone = true;
  phoneButton.disabled = true;
  
  const correctAnswer = questions[currentQuestion].answer;
  const numOfBoldOptions = Math.floor(Math.random() * 4) + 1;
  let boldedOptions = 0;
  
  // Ensure the correct answer is always bolded
  optionButtons[correctAnswer].style.fontWeight = "bold";
  boldedOptions++;
  
  while (boldedOptions < numOfBoldOptions) {
  const randomIndex = Math.floor(Math.random() * 4);
  const optionButton = optionButtons[randomIndex];
  if (!optionButton.style.fontWeight) {
  optionButton.style.fontWeight = "bold";
  boldedOptions++;
  }
  }
  }
  
  function useAudience() {
  if (usedAudience) return;
  usedAudience = true;
  audienceButton.disabled = true;
  
  const correctAnswer = questions[currentQuestion].answer;
  const numOfBoldOptions = Math.floor(Math.random() * 3) + 1;
  let boldedOptions = 0;
  
  // Ensure the correct answer is always bolded
  optionButtons[correctAnswer].style.fontWeight = "bold";
  boldedOptions++;
  
  while (boldedOptions < numOfBoldOptions) {
  const randomIndex = Math.floor(Math.random() * 4);
  const optionButton = optionButtons[randomIndex];
  if (!optionButton.style.fontWeight) {
  optionButton.style.fontWeight = "bold";
  boldedOptions++;
  }
  }
  }
  
  startGame();
