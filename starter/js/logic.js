// setting variables 
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
const inputEl = document.querySelector('#initials')
const submitBtn = document.querySelector('#submit')
const highScoresEl = document.querySelector('#highscores')
const feedbackEl = document.querySelector('#feedback')
const finalScoreEl = document.querySelector('#final-score')

let randomisedQuestions
let currentQuestionIndex = 0
let choices
let score = 0
let secondsLeft = 60
let highScoresPage


//Function to initiate the start of the quiz
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


//Function to display quiz questions and option of possible answers
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

//Function to validated selected answer and display to user if answer is correct or wrong
function selectedAnswer(event){

    // event.preventDefault()
            
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

//Function to countdown remaining time left in the quiz. starting from 60secs
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

//Function to end quiz

function endQuiz(){
    questionsEl.classList.add('hide')
    endScreenEl.classList.remove('hide')
    timerEl.classList.add('hide')
    finalScoreEl.textContent = score
}


//function to view the highscore page once initial has been submitted
function viewHighscorePage(){
    highScoresPage= window.location.href = "highscores.html";
}


//function to store initial to local storage once submitted
function submitInitials(event) {
    
    event.preventDefault()

    let initials = inputEl.value.toUpperCase().trim()

    

    if(initials === "") {
        alert("Initials cannot be blank. Enter initials to record score")
    }
    
   let entry = {
    initials,
    score 
   }

   let leaderboard = []

   if (localStorage.getItem("leaderboard")){
    leaderboard = JSON.parse(localStorage.getItem("leaderboard"))
    leaderboard.push(entry)
   } else {
    leaderboard = [entry]
   }
    

    localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
    
    viewHighscorePage()



}

//Add event listener to start quiz once button is clicked
startBtn.addEventListener("click", startQuiz)

//Add event listener to submit score and initials to the highscore leaderboard page once button is clicked
submitBtn.addEventListener("click", submitInitials)

    





