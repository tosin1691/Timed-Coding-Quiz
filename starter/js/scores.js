const inpulEl = document.querySelector('#initials')
const submitBtn = document.querySelector('#submit')
const highScoresEl = document.querySelector('#highscores')
const feedbackEl = document.querySelector('#feedback')
const clearEl = document.querySelector('#clear')


//function to display score in the highscore page
function displayScores() {

    let leaderboard = JSON.parse(localStorage.getItem("leaderboard"))

    if (!leaderboard){
        return
    }

    leaderboard.sort((a, b) => b.score - a.score)  

    leaderboard.forEach(entry => {
    let playerInitialsLi = document.createElement("li")
    let playerScoreSpan = document.createElement("span")
    playerInitialsLi.textContent = entry.initials
    playerScoreSpan.textContent = " - " + entry.score
    
    playerInitialsLi.appendChild(playerScoreSpan)
    highScoresEl.appendChild(playerInitialsLi)
    

    
    });


}


displayScores()

//Add event listener to clear local storage once button is clicked
clearEl.addEventListener("click", function(){
    localStorage.clear()
    Array.from(highScoresEl.childNodes.entries()).map(function([index, child]){
        highScoresEl.removeChild(child)
    })
})



