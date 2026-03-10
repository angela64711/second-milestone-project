const game = {
    mode: "", //"capital" or "flag"
    totalQuestions: 0, //number chosen in the modal
    currentQuestion: 1, //which question the player is on
    score: 0, //number of correct answers
    currentCountry: null, //country object selected in the current round
    correctAnswer: "", //correct answer for this round
    options: [], //the 4 answer choices for this round
    usedCountries: [] //countries already used in this round(prevents duplicates)
};

const questionCounter = document.getElementById("question-counter");
const questionText = document.getElementById("question");
const flagImg = document.getElementById("flag-img");
const answerButtons = document.querySelectorAll(".answer-btn");


/**
 * attach click listener to the Start Game button
 * the existence check ensures the script only runs on pages
 * where this button is present, preventing errors on other pages
 */

let beginGameBtn = document.getElementById("begin-game-btn");
let replayBtn = document.getElementById("replay-btn");

if (beginGameBtn) {
    beginGameBtn.addEventListener("click", readModal);
}

if (replayBtn) {
    replayBtn.addEventListener("click", readModal);
}

/**
 * reads the user's quiz settings from the modal,
 * saves them to localStorage, and opens the quiz page
 */
function readModal() {

    let mode = document.querySelector('input[name="game-mode"]:checked').value;
    let number = document.getElementById("question-count").value;

    localStorage.setItem("gameMode", mode);
    localStorage.setItem("totalQuestions", number);

    window.location.href = "quiz.html";

}

function loadGameSettings() {
    game.mode = localStorage.getItem("gameMode");
    game.totalQuestions = Number(localStorage.getItem("totalQuestions"));
}

if (questionCounter) {
    loadGameSettings();
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

    const selectedCountry = getUnusedCountry();
    const wrongAnswers = getWrongCapitals(selectedCountry);

    game.currentCountry = selectedCountry;
    game.correctAnswer = selectedCountry.capital;

    let options = [...wrongAnswers];
    const randomPosition = Math.floor(Math.random() * 4);
    options.splice(randomPosition, 0, selectedCountry.capital);

    game.options = options;
    game.usedCountries.push(selectedCountry.name);

    questionCounter.innerText = `Question ${game.currentQuestion} of ${game.totalQuestions}`;
    questionText.innerText = `What is the capital of ${game.currentCountry.name}?`;
    flagImg.src = `assets/images/flags/${game.currentCountry.code}.png`;
    flagImg.alt = `Flag of ${game.currentCountry.name}`;

    answerButtons.forEach((button, index) => {
        button.innerText = game.options[index];
    });

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

    const selectedCountry = getUnusedCountry();
    const wrongAnswers = getWrongCountryNames(selectedCountry);

    game.currentCountry = selectedCountry;
    game.correctAnswer = selectedCountry.name;

    let options = [...wrongAnswers];
    const randomPosition = Math.floor(Math.random() * 4);
    options.splice(randomPosition, 0, selectedCountry.name);

    game.options = options;
    game.usedCountries.push(selectedCountry.name);

    questionCounter.innerText = `Question ${game.currentQuestion} of ${game.totalQuestions}`;
    questionText.innerText = "Which country does this flag belong to?";
    flagImg.src = `assets/images/flags/${game.currentCountry.code}.png`;
    flagImg.alt = `Flag of ${game.currentCountry.name}`;

    answerButtons.forEach((button, index) => {
        button.innerText = game.options[index];
    });

}


/**
 * selects a random country that has not been used in the current game
 * filters out already used countries and returns one random country
 */

function getUnusedCountry() {

    // create an array containing only countries that have not been used
    const unusedCountries = countries.filter(country => !game.usedCountries.includes(country.name));

    // generate a random index within the range of the  unusedCountries array
    const randomIndex = Math.floor(Math.random() * unusedCountries.length);

    //return the country at that random position
    return unusedCountries[randomIndex];

}


/**
 * returns three wrong capital answers for the current question
 * excludes the correct country and randomly selects three different capitals
 */

function getWrongCapitals(correctCountry) {

    // create an array of countries excluding the correct one
    const wrongCountries = countries.filter(country =>
        country.name !== correctCountry.name
    );

    const wrongCapitals = [];

    while (wrongCapitals.length < 3) {
        const randomIndex = Math.floor(Math.random() * wrongCountries.length);
        const randomCapital = wrongCountries[randomIndex].capital;

        if (!wrongCapitals.includes(randomCapital)) {
            wrongCapitals.push(randomCapital);
        }
    }

    return wrongCapitals;
}


/**
 * returns three wrong country names for the current question
 * excludes the correct country and randomly selects three different country names
 */

function getWrongCountryNames(correctCountry) {
    const wrongCountries = countries.filter(country =>
        country.name !== correctCountry.name
    );

    const wrongCountryNames = [];

    while (wrongCountryNames.length < 3) {
        const randomIndex = Math.floor(Math.random() * wrongCountries.length);
        const randomCountryName = wrongCountries[randomIndex].name;

        if (!wrongCountryNames.includes(randomCountryName)) {
            wrongCountryNames.push(randomCountryName);
        }
    }

    return wrongCountryNames;
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