let startBtn = document.querySelector('#start');
let timerEl = document.querySelector('#timer');
let containerEl = document.querySelector('#container');
let questionEl = document.querySelector('#question');
let answerEl = document.querySelector('#answers');
let score = document.querySelector('#current-score');
let answer = document.createElement('li');
let btn = document.createElement('button');
let timeLeft = 30;
let currentQuestionIndex = 0;
let userScore = 0;


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

answerEl.addEventListener('click', (event) => {
    if (event.target.matches('button')) {
        let userGuess = event.target.getAttribute('data-answer');
        let answers = document.querySelector('#answers');
        let answerAttr = answers.getAttribute('data-answer');
        console.log(answerAttr)


        if (userGuess) {
            userScore++;
        }

        if (currentQuestionIndex !== questions.length - 1) {
            currentQuestionIndex++;
            renderCurrentQuestion();
        }
    }

    score.innerHTML = userScore;
});


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

    renderCurrentQuestion();

}

startBtn.addEventListener('click', startGame)


let renderCurrentQuestion = () => {
    let currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    questionEl.innerText = currentQuestion.question;

    answerEl.innerHTML = '';
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        let answer = document.createElement('li');
        let btn = document.createElement('button');
    
        btn.textContent = currentQuestion.answers[i].text;
        btn.setAttribute('data-answer', currentQuestion.answers[i].correct);
        answer.appendChild(btn);
        answerEl.appendChild(answer);
    }
}



