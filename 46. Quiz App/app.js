let quizBox = document.querySelector('.quiz-box')

//this is input
let formItems = document.querySelectorAll('.form__item')

//answer text
let quizVariants = document.querySelectorAll('span')

//questions
let quizTitle = document.querySelector('.quiz__title')

let btn = document.querySelector('.submit-btn')


const quizData = [
    {
        question: "Which language runs in a web browser?",
        answers: [1,2,3,4],
        // a: "Java",
        // b: "C",
        // c: "Python",
        // d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        answers: [5,6,7,8],
        // a: "Central Style Sheets",
        // b: "Cascading Style Sheets",
        // c: "Cascading Simple Sheets",
        // d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        answers: [9,10,11,12],
        // a: "Hypertext Markup Language",
        // b: "Hypertext Markdown Language",
        // c: "Hyperloop Machine Language",
        // d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        answers: [13,14,15,16],
        // a: "1996",
        // b: "1995",
        // c: "1994",
        // d: "none of the above",
        correct: "b",
    },
];


let currentQuiz = 0
let score = 0

loadQuiz()

function deselectAnswers() {
    formItems.forEach(formItem => formItem.checked = false)
}


function loadQuiz() {
    deselectAnswers()

    let currentQuizData = quizData[currentQuiz]
    quizTitle.textContent = currentQuizData.question
    quizVariants.forEach((quizVariant, index) => {
        quizVariant.textContent = currentQuizData.answers[index]
    })
}


function getSelected() {
    let answer

    formItems.forEach(formItem => {
        if (formItem.checked) {
            answer = formItem.id
        }
    })
    return answer
}


btn.addEventListener('click', (e) => {
    let answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quizBox.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()" class="btn">Reload</button>
            `
        }
    }
})



let liEls = document.querySelectorAll('li')

liEls.forEach(li => {
   li.addEventListener('click', (e) => {
    let input = e.target.firstElementChild
    input.checked = true
    }) 
});

