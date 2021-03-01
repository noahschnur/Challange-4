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

// Buttons
// Start
let startBtn = document.querySelector("#start");
// Answer buttons
let answerButton= document.querySelectorAll("button.answerButton")
let answer1Button = document.querySelector("#answer1");
let answer2Button = document.querySelector("#answer2");
let answer3Button = document.querySelector("#answer3");
let answer4Button = document.querySelector("#answer4");

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

