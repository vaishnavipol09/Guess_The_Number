let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHigh")
const result = document.querySelector(".result")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1 // how many number you guesses

let playGame = true;

if(playGame) {
    submit.addEventListener("click",function(e){
        e.preventDefault() // stop here
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    //
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }
   // else if(guess < 1 || guess > 100){
      //  alert("Please enter a number between 1 and 100")
   // }

   else if(guess < 1){
    alert("Please enter a number more than 1")
   }
   else if(guess > 100){
    alert("Please enter a number less than 100")
   }
   else{
    prevGuess.push(guess)
    if(numGuess === 10){
        displayGuess(guess)
        displayMessage(`Game over. Random number was ${randomNumber}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
   }
}

function checkGuess(guess){
    //
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Your guess is too low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Your guess is too high`)
    }
}

function displayGuess(guess) { // interact with DOM
    userInput.value = " "
    guessSlot.innerHTML += `${guess} , `
    numGuess++;
    remaining.innerHTML = `Remaining: ${10 - numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    //

    userInput.value = " "
    userInput.setAttribute("disabled", " ")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame(){
    //

    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click",function(e){
        randomNumber = parseInt(Math.random()* 100 +1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = " "
        remaining.innerHTML = `Remaining: ${10 - numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        playGame = true;
    })
}
