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
const gameModeTitle = document.getElementById("game-mode");


/**
 * attach click listener to the Start Game button
 * the existence check ensures the script only runs on pages
 * where this button is present, preventing errors on other pages
 */

let beginGameBtn = document.getElementById("begin-game-btn");

if (beginGameBtn) {
    beginGameBtn.addEventListener("click", readModal);
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

/**
 * retrieves the quiz settings stored in localStorage on the start page
 * and applies them to the game object when the quiz page loads
 */
function loadGameSettings() {
    game.mode = localStorage.getItem("gameMode");
    game.totalQuestions = Number(localStorage.getItem("totalQuestions"));

    // prevent loading the quiz page without valid game settings
    if (!game.mode || !game.totalQuestions) {
        window.location.href = "index.html";
    }a
}


/**
 * start the game only if the quiz page elements exist
 * prevents the game logic from running on other pages like index.html
 */

if (questionCounter) {
    
    loadGameSettings();
    
    answerButtons.forEach(button => {
        button.addEventListener("click", checkAnswer);
    });

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

    // Update the quiz title depending on the selected mode
    if (game.mode === "capital") {
        gameModeTitle.innerText = "Guess the Capital";
        displayCapitalQuestion();
    } else if (game.mode === "flag") {
        gameModeTitle.innerText = "Guess the Country from the Flag";
        displayFlagQuestion();
    }

    // Display first question based on game mode
    if (game.mode === "capital") {
        displayCapitalQuestion();
    } else if (game.mode === "flag") {
        displayFlagQuestion();
    }

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
 * triggered when the user clicks an answer button
 * compares the selected answer with the correct answer stored in the game object
 * calls the visual feedback function to highlight the answers
 * updates the score if the answer is correct
 * waits briefly before advancing to the next question
 */
function checkAnswer(event) {

    const clickedButton = event.target; //refers to the element that was clicked
    const selectedAnswer = clickedButton.innerText;
    const isCorrect = selectedAnswer === game.correctAnswer; // true if the clicked answer matches the correct answer stored in the game object

    lightsOn(clickedButton);

    // disable all answer buttons after the first selection to prevent multiple answers per question
    answerButtons.forEach(button => {
    button.disabled = true;
    });

    if (isCorrect) {
        updateScore();
    }

    setTimeout(advanceGame, 1500); // delay advancing to the next question so the player can see the feedback
}


/**
 * displays visual feedback after an answer is selected
 * highlights the correct answer in green
 * if the player selected the wrong answer, highlights the clicked button in red
 */
function lightsOn(clickedButton) {

    answerButtons.forEach(button => {

        if (button.innerText === game.correctAnswer) {
            button.classList.add("correct");
        }

    });

    if (clickedButton.innerText !== game.correctAnswer) {
        clickedButton.classList.add("wrong");
    }

}


/**
 * increases the player's score by one when a correct answer is selected
 * updates the score stored in the game state
 */
function updateScore() {

    game.score += 1;

}


/**
 * progresses the game after each question
 * resets button styles and re-enables the answer buttons
 * increments the question counter
 * loads the next question or ends the game when all questions are answered
 */
function advanceGame() {

    // reset button state for the next question
    answerButtons.forEach(button => {
        button.classList.remove("correct", "wrong");
        button.disabled = false;
    });

    game.currentQuestion += 1;

    if (game.currentQuestion <= game.totalQuestions) {
        if (game.mode === "capital") {
            displayCapitalQuestion();
        } else if (game.mode === "flag") {
            displayFlagQuestion();
        }
    } else {
        endGame();
    }
}


/**
 * ends the game when all questions have been answered
 * stores the final score and total number of questions in localStorage
 * redirects the player to the results page
 */
function endGame() {

    localStorage.setItem("finalScore", game.score);
    localStorage.setItem("finalTotalQuestions", game.totalQuestions);

    window.location.href = "results.html";

}


const resultText = document.getElementById("score");
const resultMessage = document.getElementById("message");

/**
 * runs only on the results page
 * retrieves the stored score from localStorage
 * displays the final score and a message to the player
 */
    if (resultText) {
        displayResult();
}

function displayResult() {

    const finalScore = Number(localStorage.getItem("finalScore"));
    const totalQuestions = Number(localStorage.getItem("finalTotalQuestions"));

    resultText.innerText = `You scored ${finalScore} out of ${totalQuestions}!`;

    if (finalScore === totalQuestions) {
        resultMessage.innerText = "Perfect score! Amazing job!";
    } else if (finalScore >= totalQuestions / 2) {
        resultMessage.innerText = "Great job!";
    } else {
        resultMessage.innerText = "Nice try! Play again and improve your score.";
    }

}