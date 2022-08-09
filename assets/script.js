let startBtn = document.querySelector('#start');
let timerEl = document.querySelector('#timer');
let containerEl = document.querySelector('#container');
let questionEl = document.querySelector('#question');
let answerEl = document.querySelector('#answers')
let timeLeft = 30;

let startGame = () => {
    startBtn.classList.add('hide')
    setInterval(function () {
        timeLeft--;
        if (timeLeft >= 0) {
            seconds = document.getElementById('seconds-left')
            seconds.innerHTML = timeLeft;
        } else {
            seconds.innerHTML = "GAMEOVER"
        }
    }, 1000)

}

startBtn.addEventListener('click', startGame)

let questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    },
    {
        question: `Use string concatenation to write the full name of the person. That is the first name and last name separated by a space character. 
        <pre> 
        const firstName = "Sam"; 
        const lastName = "Doe"; 
        const fullName = ;</pre>`,
        answers: [
            { text: '<pre> firstName + lastName <pre>', correct: false },
            { text: '<pre> "firstName + lastName <pre>', correct: false },
            { text: '<pre> firstName + "  " + lastName <pre>', correct: true }
        ]
    }
]

let renderCurrentQuestion = () => {
    let questionArr = questions;
    questionArr.forEach(questions => document.getElementById('question') = questions)

}

renderCurrentQuestion();





