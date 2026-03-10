

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


function readModal() {
  /**
  * sets game.mode and game.totalQuestions
  * calls startGame()
  */

}

function startGame() {
/**
 * initializes and resets the game state
 * sets of resets:
 * game.currentQuestion = 1
 * game.score = 0
 * game.currentCountry = null
 * game.correctAnswer = ""
 * game.options = []
 * game.usedCountries = []
 * calls display*Question()
*/
}


function displayCapitalQuestion() {
/**
 * prepares the round (choose valid country and 3 wrong ones, shuffle, push to buttons)
 * sets game.currentCountry, game.correctAnswer, game.options
 * updates game.usedCountries (add current country)
 * displays question and answers
 * waits for user click
 * user click triggers checkAnswer()
 */
}

function displayFlagQuestion() {
/**
 * prepares the round (choose valid country and 3 wrong ones, shuffle, push to buttons)
 * sets game.currentCountry, game.correctAnswer, game.options
 * updates game.usedCountries (add current country)
 * displays question and answers
 * waits for user click
 * user click triggers checkAnswer()
 */
}

function checkAnswer() {
/**
 * compares clicked answer with game.correctAnswer
 * calls lightsOn() (visual feedback)
 * if correct calls updateScore()
 * waits 3 seconds and then
 * calls advanceGame()
 */
}

function lightsOn() {
/**
 * turn correct answer green
 * if user is wrong, turn user answer red
 */
}

function updateScore() {
//increments game.score (if correct)
}

function advanceGame() {
/**
 * removes highlight classes from buttons
 * sets game.currentQuestion += 1
 * checks is game.currentQuestion < game.totalQuestions?
 * yes-> show next question, call display*Question
 * no -> end game, call displayResult
 */
}

function displayResult() {
/**
 * reads game.score and
 * game.totalQuestions
 * displays final score and
 * message
 */
}