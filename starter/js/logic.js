
let startBtn = document.querySelector("#start")
let startScreenEl = document.querySelector("#start-screen")
let questionsEl = document.querySelector("#questions")
let questionTitleEl = document.querySelector("#question-title")
let choicesEl = document.querySelector("#choices")

// const choicesListEl = document.createElement("ol")
// const choicesLi1= document.createElement("li")
// const choicesLi2= document.createElement("li")
// const choicesLi3= document.createElement("li")
// const choicesLi4= document.createElement("li")

let randomisedQuestions
let currentQuestionIndex


function startQuiz(){
    startScreenEl.classList.add('hide')
    questionsEl.classList.remove('hide')
    randomisedQuestions = questions.sort(function(a, b){
        return 0.5 - Math.random()
      })
    currentQuestionIndex = 0
    showQuestions(randomisedQuestions[currentQuestionIndex])


}

function showQuestions(question) {
    questionTitleEl.textContent = question.question
    
    }


startBtn.addEventListener('click', startQuiz)

