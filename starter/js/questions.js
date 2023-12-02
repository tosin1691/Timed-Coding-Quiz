

const questions = [
    {
        questions: "Which attribute must have a unique value each time it is used in an HTML document?",
        answers: [
            {text: "id", correct: true},
            {text: "title", correct: false},
            {text: "class", correct: false},
            {text: "style", correct: false},
        ]
    },

    {
        questions: "What is the correct way to initialize an array of planets in JavaScript?",
        answers: [
            {text: 'let planets = {Venus, Mars, Earth}', correct: false},
            {text: 'String[] planets = new Array("Venus", "Mars", "Earth");', correct: false},
            {text: 'let planets = ["Venus", "Mars", "Earth"];', correct: true},
            {text: 'let galaxies = {"Venus", "Mars", "Earth"}', correct: false},
        ]
    },
    
    {
        questions: "The browser finds some CSS that it does not understand. What is likely happen?",
        answers: [
            {text: "The page will not display", correct: false},
            {text: "An error message will be displayed", correct: false},
            {text: "The browser will not load the stylesheet", correct: false},
            {text: "The browser will ignore the unknown CSS", correct: true},
        ]
    },

    {
        questions: "What does the === comparison operator do?",
        answers: [
            {text: "It tests for equality of value only", correct: false},
            {text: "It tests for equality of value and type", correct: true},
            {text: "It sets one variable equal to another in both value and type", correct: false},
            {text: "It tests for equality of type only", correct: false},
        ]
    },

    {
        questions: "Commonly used data type DO NOT include",
        answers: [
            {text: "strings", correct: false},
            {text: "booleans", correct: false},
            {text: "alerts", correct: true},
            {text: "numbers", correct: false},
        ]
    },

    {
        questions: "The condition in an if / else statement is enclosed within ______.",
        answers: [
            {text: "quotes", correct: false},
            {text: "curly brackets", correct: false},
            {text: "parentheses", correct: true},
            {text: "square brackets", correct: false},
        ]
    }
]