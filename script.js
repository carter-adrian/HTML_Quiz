const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledquestions, currentQuestionIndex;
let quizScore = 0;


function selectAnswer(e){
    const selectedButton=e.target
    const correct = selectedButton.dataset.correct

    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach((button) =>{
    setStatusClass(button, button.dataset.correct)
    })
    if (shuffledquestions.length > currentQuestionIndex +1){
        nextButton.classList.remove('hide')
    }else {} 
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classlist.add('Correct')        
    } else{
        element.classlist.add('Wrong')
    }
}

function clearStatusClass(element){
    element.classlist.remove('Correct')
    element.classlist.remove('Wrong')
}
const questions =[
    {
        question: 'Which one of these is a JavaScript Framework',
        answers: [
            {Text: 'Python', correct: false},
            {Text: 'Django', correct: false},
            {Text: 'React', correct: true},
            {Text: 'Eclipse', correct: false}


        ],
    },
    {
        question: 'Which person is a member of the Ghostbusters',
        answers: [
            {Text: 'Ray Stanz', correct: true},
            {Text: 'William Shatner', correct: false},
            {Text: 'Lou Diamond Phillips', correct: false},
            {Text: 'ALF', correct: false}

        ],
    },
    {
        question: 'True of False: Am I 42 Years Old?',
        answers: [
            {Text: 'False', correct: true},
            {Text: 'True', correct: false}
           


        ],
    },
]