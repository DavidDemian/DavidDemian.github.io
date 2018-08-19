var AlphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var score = 0;

var guessesLeft = 6;

var userGuess = [];

var computerChoice = null;

// var guessed = [];


function reset() {
    this.computerChoice = this.AlphabetArray[Math.floor(Math.random() * this.AlphabetArray.length)];
    console.log(computerChoice);
    return computerChoice;
}

reset();



document.onkeyup = function (event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // console.log(userGuess);
    // userGuess = innerHTML.push(guessed);
    if (userGuess == computerChoice) {
        score++;
        // console.log(score);
        alert(" Good Job! Correct Guess");

        reset();

        if (score >= 5) {
            score = 0;
            guessesLeft = 6;
            reset();
            alert("You win!");
        }
    }
    else {
        alert("wrong guess!");
        guessesLeft--;

        if (guessesLeft <= 0) {
            score = 0;
            guessesLeft = 5;
            console.log(guessed);
            // guessed.push(userGuess);
            alert("GameOver");
            reset();
        }

    }
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("guesses").innerHTML = "guesses: " + guessesLeft;
    document.getElementById("guessed").innerHTML = "Letters guessed so far: " + userGuess;
    
    // I couldn't get it to show the array of letters guessed
    // It keeps updating to the new user guess

}


