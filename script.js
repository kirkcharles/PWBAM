const questionText = document.getElementById("question-text");
const optionButtons = document.querySelectorAll(".option-btn");
const fiftyFiftyButton = document.getElementById("fifty-fifty");
const phoneButton = document.getElementById("phone");
const audienceButton = document.getElementById("audience");
const winningsCounter = document.getElementById("winnings-counter");
const winningAmounts = [
  100, 200, 300, 500, 1000, // Easy questions
  2000, 4000, 8000, 16000, 32000, // Moderate questions
  64000, 128000, 256000, 500000, 1000000, // Difficult questions
];

function formatWinnings(winnings) {
  if (winnings < 1000000000) {
    return `$${winnings.toLocaleString()}`;
  } else {
    const billion = Math.floor(winnings / 1000000000);
    const remainder = winnings % 1000000000;
    return `${billion} billion, $${remainder.toLocaleString()}`;
  }
}

let winnings = 0;



// Define your question arrays here
const easyQuestions = [
    {
        question: "What is the capital of Australia?",
        options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
        answer: 0,
        },
        {
        question: "What is the name of the world's largest ocean?",
        options: ["Pacific", "Atlantic", "Indian", "Arctic"],
        answer: 0,
        },
   
                
                      {
                      question: "What was the name of the battle fought on July 1-3, 1863, in which Confederate forces under General Robert E. Lee were defeated by Union forces under General George G. Meade in the American Civil War?",
                      options: ["Battle of Gettysburg", "Battle of Antietam", "Battle of Chancellorsville", "Battle of Bull Run"],
                      answer: 0,
                      },
                      {
                      question: "What was the name of the battle fought on November 30, 1874, in which British forces under General Frederick Roberts defeated Afghan forces led by Akbar Khan in the Second Anglo-Afghan War?",
                      options: ["Battle of Isandlwana", "Battle of Maiwand", "Battle of Kabul", "Battle of Kandahar"],
                      answer: 3,
                      },
                      {
                        question: "What was the name of the battle fought on November 30, 1874, in which British forces under General Frederick Roberts defeated Afghan forces led by Akbar Khan in the Second Anglo-Afghan War?",
                        options: ["Battle of Isandlwana", "Battle of Maiwand", "Battle of Kabul", "Battle of Kandahar"],
                        answer: 3,
                        },
                        {
                          question: "What was the name of the battle fought on November 30, 1874, in which British forces under General Frederick Roberts defeated Afghan forces led by Akbar Khan in the Second Anglo-Afghan War?",
                          options: ["Battle of Isandlwana", "Battle of Maiwand", "Battle of Kabul", "Battle of Kandahar"],
                          answer: 3,
                          },
                          {
                            question: "What was the name of the battle fought on November 30, 1874, in which British forces under General Frederick Roberts defeated Afghan forces led by Akbar Khan in the Second Anglo-Afghan War?",
                            options: ["Battle of Isandlwana", "Battle of Maiwand", "Battle of Kabul", "Battle of Kandahar"],
                            answer: 3,
                            },

    // Add your easy questions here
];

const moderateQuestions = [
    {
    question: "What is the only mammal that can fly?",
    options: ["Bat", "Squirrel", "Mongoose", "Gorilla"],
    answer: 0,
    },
    {
    question: "Which planet is often called the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Uranus"],
    answer: 1,
    },
    {
    question: "Who directed the movie 'Pulp Fiction'?",
    options: ["Quentin Tarantino", "Martin Scorsese", "Steven Spielberg", "Christopher Nolan"],
    answer: 0,
    },
    {
      question: "Who directed the movie 'Pulp Fiction'?",
      options: ["Quentin Tarantino", "Martin Scorsese", "Steven Spielberg", "Christopher Nolan"],
      answer: 0,
      },
      {
        question: "Who directed the movie 'Pulp Fiction'?",
        options: ["Quentin Tarantino", "Martin Scorsese", "Steven Spielberg", "Christopher Nolan"],
        answer: 0,
        },
        {
          question: "Who directed the movie 'Pulp Fiction'?",
          options: ["Quentin Tarantino", "Martin Scorsese", "Steven Spielberg", "Christopher Nolan"],
          answer: 0,
          },
          {
            question: "Who directed the movie 'Pulp Fiction'?",
            options: ["Quentin Tarantino", "Martin Scorsese", "Steven Spielberg", "Christopher Nolan"],
            answer: 0,
            },
           



    // Add your moderate questions here
];

const difficultQuestions = [

    {
        question: "What is the name of the economic theory that emphasizes the importance of government intervention in the economy?",
        options: ["Classical economics", "Keynesian economics", "Austrian economics", "Chicago school of economics"],
        answer: 1,
        },
        {
        question: "What is the term for a tax that is levied on goods and services at the point of sale?",
        options: ["Income tax", "Corporate tax", "Sales tax", "Property tax"],
        answer: 2,
        },
        {
        question: "What is the name of the economic theory that proposes that government should only intervene in the economy to maintain the rule of law, protect property rights, and maintain the stability of the currency?",
        options: ["Classical economics", "Keynesian economics", "Austrian economics", "Chicago school of economics"],
        answer: 0,
        },
        {
        question: "What is the name of the measure of the total value of goods and services produced in a country over a given period of time?",
        options: ["Gross domestic product", "Consumer price index", "Unemployment rate", "Inflation rate"],
        answer: 0,
        },
        {
        question: "What is the name of the economic system in which the means of production are owned and controlled by the state?",
        options: ["Socialism", "Capitalism", "Communism", "Fascism"],
        answer: 2,
        },
        {
        question: "What is the name of the measure of the price level of a basket of goods and services consumed by households?",
        options: ["Gross domestic product", "Consumer price index", "Unemployment rate", "Inflation rate"],
        answer: 1,
        },
        {
          question: "What is the name of the measure of the price level of a basket of goods and services consumed by households?",
          options: ["Gross domestic product", "Consumer price index", "Unemployment rate", "Inflation rate"],
          answer: 1,
          },
          {
            question: "What is the name of the measure of the price level of a basket of goods and services consumed by households?",
            options: ["Gross domestic product", "Consumer price index", "Unemployment rate", "Inflation rate"],
            answer: 1,
            },

    // Add your difficult questions here
];

let questions;

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

let currentQuestion;
let usedFiftyFifty = false;
let usedPhone = false;
let usedAudience = false;

function startGame() {
  // Shuffle each difficulty level array
  const shuffledEasyQuestions = shuffleArray(easyQuestions);
  const shuffledModerateQuestions = shuffleArray(moderateQuestions);
  const shuffledDifficultQuestions = shuffleArray(difficultQuestions);

  // Combine the shuffled arrays to form the questions array
  questions = [
    ...shuffledEasyQuestions.slice(0, 5),
    ...shuffledModerateQuestions.slice(0, 5),
    ...shuffledDifficultQuestions.slice(0, 5),
  ];

  // Reset lifelines
  usedFiftyFifty = false;
  fiftyFiftyButton.classList.remove("used");
  usedPhone = false;
  phoneButton.classList.remove("used");
  usedAudience = false;
  audienceButton.classList.remove("used");

  // Reset winnings
  winnings = 0;
  winningsCounter.textContent = "$0";

  // Start the game
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
    winnings = winningAmounts[currentQuestion];
    winningsCounter.textContent = `${formatWinnings(winnings)}`;

    currentQuestion++;

    if (currentQuestion < questions.length) {
      if (currentQuestion === 15) {
        alert("Congratulations! You've won!");
        startGame();
      } else {
        showQuestion();
      }
    } else {
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
  fiftyFiftyButton.classList.add("used");

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
  phoneButton.classList.add("used");

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
  audienceButton.classList.add("used");

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