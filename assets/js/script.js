

const game = {
    mode: "",               //"capital" or "flag"
    totalQuestions: 0,      //number chosen in the modal
    currentQuestion: 1,     //which question the player is on
    score: 0,               //number of correct answers
    currentCountry: null,   //country object selected in the current round
    correctAnswer: "",      //correct answer for this round
    options: [],            //the 4 answer choices for this round
    usedCountries: []       //countries already used in this round(prevents duplicates)
} ;

let beginGameBtn = document.getElementById("begin-game-btn");
let replayBtn = document.getElementById("replay-btn");

if (beginGameBtn) {
    beginGameBtn.addEventListener("click", readModal);
}

if (replayBtn) {
    replayBtn.addEventListener("click", readModal);
}

/**
  * reads the user's inputs in the modal
  * sets game.mode and game.totalQuestions
  * calls startGame()
  */
function readModal() {
  
 let mode = document.querySelector('input[name="game-mode"]:checked').value;
 let number = document.getElementById("question-count").value;

 game.mode = mode;
 game.totalQuestions = Number(number);

 startGame();
     
}

/**
 * initializes and resets the game state
 * calls the appropriate display*Question()
*/
function startGame() {

    // Reset game state
    game.currentQuestion = 1;
    game.score = 0;
    game.currentCountry = null;
    game.correctAnswer = "";
    game.options = [];
    game.usedCountries = [];

    // Display first question based on game mode
    if (game.mode === "capital") {
        displayCapitalQuestion();
    } else if (game.mode === "flag") {
        displayFlagQuestion();
    }

    console.log("Game initialized:", game);

}

/**
 * prepares the round (choose valid country and 3 wrong ones, shuffle, push to buttons)
 * sets game.currentCountry, game.correctAnswer, game.options
 * updates game.usedCountries (add current country)
 * displays question and answers
 * waits for user click
 * user click triggers checkAnswer()
 */
function displayCapitalQuestion() {
    console.log("capital");
}


/**
 * prepares the round (choose valid country and 3 wrong ones, shuffle, push to buttons)
 * sets game.currentCountry, game.correctAnswer, game.options
 * updates game.usedCountries (add current country)
 * displays question and answers
 * waits for user click
 * user click triggers checkAnswer()
 */
function displayFlagQuestion() {
    console.log("flag");
}


/**
 * compares clicked answer with game.correctAnswer
 * calls lightsOn() (visual feedback)
 * if correct calls updateScore()
 * waits 3 seconds and then
 * calls advanceGame()
 */
function checkAnswer() {

}


/**
 * turn correct answer green
 * if user is wrong, turn user answer red
 */
function lightsOn() {

}


/**
 * increments game.score (if correct)
 * */
function updateScore() {

}


/**
 * removes highlight classes from buttons
 * sets game.currentQuestion += 1
 * checks is game.currentQuestion < game.totalQuestions?
 * yes-> show next question, call display*Question
 * no -> end game, call displayResult
 */
function advanceGame() {

}


/**
 * reads game.score and
 * game.totalQuestions
 * displays final score and
 * message
 */
function displayResult() {

}