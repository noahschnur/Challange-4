// Time and score
let timeEl = document.querySelector("p.time");
let secondsLeft = 75;
let scoreEl = document.querySelector("#score");
// Section intro
let introEl = document.querySelector("#intro");
// Questions
let questionsEl = document.querySelector("#questions");
let questionEl = document.querySelector("#question");
let questionCount = 0;
// Div #correctwrong
let correctwrongEl = document.querySelector("#correctwrong");
// Game end
let finalEl = document.querySelector("#final");
let initialsInput = document.querySelector("#initials");
let highscoresEl = document.querySelector("#highscores");
let scoreListEl = document.querySelector("#score-list");
let scoreList = [];
// Buttons
// Start
let startBtn = document.querySelector("#start");
// Answer buttons
let answerBtn= document.querySelectorAll("button.answerButton")
let answer1Btn = document.querySelector("#answer1");
let answer2Btn = document.querySelector("#answer2");
let answer3Btn = document.querySelector("#answer3");

let questions = [
    {
        // Question 0
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. single quotes", "2. square brackets", "3. parentheses", "4. forward slashes"],
        correctAnswer: "2"
    },
    {
        // Question 1
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. booleans", "2. other arrays", "3. numbers and strings", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        // Question 2        
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. console.log", "2. if/else/else if", "3. Javascript", "4. for loops"],
        correctAnswer: "0"
    },
    {
        // Question 3        
        question: "Commonly used data types do NOT include:",
        answers: ["1. booleans", "2. alerts", "3. numbers", "4. strings"],
        correctAnswer: "1"
    },
    {
        // Question 4        
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. parentheses", "2. curly brackets", "3. double quotes", "4. forward slashes and asterisks"],
        correctAnswer: "1"
    }
];

// Functions
// Timer
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `Time:${secondsLeft}`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 1000);
}

// Start quiz with timer and set up questions
function startQuiz() {
    introEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}

function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        answer1Btn.textContent = questions[id].answers[0];
        answer2Btn.textContent = questions[id].answers[1];
        answer3Btn.textContent = questions[id].answers[2];
        answer4Btn.textContent = questions[id].answers[3];
    }
}

// Function to check answer and then move on
function checkAnswer(event) {
    event.preventDefault();

correctwrongEl.style.display = "block";
        let p = document.createElement("p");
    correctwrongEl.appendChild(p);

setTimeout(function () {
        p.style.display = 'none';
    }, 500);

if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "Wrong!";
}

if (questionCount < questions.length) {
    questionCount++;
}

setQuestion(questionCount);
}
