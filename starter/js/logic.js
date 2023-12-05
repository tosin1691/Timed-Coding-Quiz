
const startBtn = document.querySelector("#start")
const startScreenEl = document.querySelector("#start-screen")
const questionsEl = document.querySelector("#questions")
const questionTitleEl = document.querySelector("#question-title")
const choicesEl = document.querySelector("#choices")
const timeEl = document.querySelector("#time")
const timerEl = document.querySelector(".timer")
const correctAnswerEl = document.querySelector("#correct-answer")
const lineBreakEl = document.querySelector("#line-break")
const endScreenEl = document.querySelector("#end-screen")

let randomisedQuestions
let currentQuestionIndex = 0
let choices
let score = 0
let secondsLeft = 75


function startQuiz(){
    
    startScreenEl.classList.add('hide')
    questionsEl.classList.remove('hide')
    timerEl.classList.remove('hide')
    randomisedQuestions = questions.sort(function(a, b){
        return 0.5 - Math.random()
      })
    currentQuestionIndex = 0
    showQuestions(randomisedQuestions[currentQuestionIndex])

    quizTimer()

}

function showQuestions(question) {
    questionTitleEl.textContent = question.question
    
    if (!lineBreakEl.className.includes("hide")){
        lineBreakEl.classList.add("hide")
    }

    if (!correctAnswerEl.className.includes("hide")){
        correctAnswerEl.classList.add("hide")
    }

    Array.from(choicesEl.childNodes.entries()).map(function([index, child]){
        choicesEl.removeChild(child)
    })

    question.answers.map(function(answer){

        choices = document.createElement("button")
        choices.textContent = answer.text
        choicesEl.appendChild(choices)


        if(answer.correct){
            choices.classList.add("correct")
        } else {
            choices.classList.add("incorrect")
        }

        choices.addEventListener("click", selectedAnswer)
    })
   
    }

    function selectedAnswer(event){

        event.preventDefault()
            
        let selectedAnswer = event.target
            
            if(selectedAnswer.matches(".correct")) {
                correctAnswerEl.classList.remove("hide")
                lineBreakEl.classList.remove("hide")
                correctAnswerEl.textContent = "Correct!"
                score++
            } else if (selectedAnswer.matches(".incorrect")) {
                correctAnswerEl.classList.remove("hide")
                lineBreakEl.classList.remove("hide")
                correctAnswerEl.textContent = "Wrong!"
                secondsLeft = secondsLeft - 5
                timeEl.textContent = secondsLeft
            }

            
                setTimeout(function(){
                    nextQuestion()
                    
                }, 300)
            
        }

    function quizTimer(){
        let timeInterval = setInterval(function(){
        secondsLeft--
        timeEl.textContent = secondsLeft

        if (secondsLeft <= 0) {
            clearInterval(timeInterval)
            endQuiz()
        }
        }, 1000)
        
    }

    function nextQuestion(){
        currentQuestionIndex++

        if(randomisedQuestions.length === currentQuestionIndex) {
            endQuiz()

        } else {
        showQuestions(randomisedQuestions[currentQuestionIndex])
        }
    
    }

    function endQuiz(){
        questionsEl.classList.add('hide')
        endScreenEl.classList.remove('hide')
        timerEl.classList.add('hide')
    }

    



startBtn.addEventListener('click', startQuiz)

