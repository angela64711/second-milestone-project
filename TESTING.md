# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.


## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
|  | [404.html](https://github.com/angela64711/second-milestone-project/blob/main/404.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://angela64711.github.io/second-milestone-project/404.html) | ![screenshot](documentation/validation/html--404.png) | 
|  | [index.html](https://github.com/angela64711/second-milestone-project/blob/main/index.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://angela64711.github.io/second-milestone-project/index.html) | ![screenshot](documentation/validation/html--index.png) | 
|  | [quiz.html](https://github.com/angela64711/second-milestone-project/blob/main/quiz.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://angela64711.github.io/second-milestone-project/quiz.html) | ![screenshot](documentation/validation/html--quiz.png) | 
|  | [results.html](https://github.com/angela64711/second-milestone-project/blob/main/results.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://angela64711.github.io/second-milestone-project/results.html) | ![screenshot](documentation/validation/html--results.png) | 


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [style.css](https://github.com/angela64711/second-milestone-project/blob/main/assets/css/style.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https://angela64711.github.io/second-milestone-project) | ![screenshot](documentation/validation/css-assets-style.png) | ⚠️ Notes (if applicable) |


### JavaScript

⚠️ INSTRUCTIONS ⚠️

If using modern JavaScript (ES6) methods, then make sure to include the following line at the very top of every single JavaScript file in your project (this should remain in your files for submission as well):

`/* jshint esversion: 11 */`

If you are also including jQuery (`$`), then the updated format will be:

`/* jshint esversion: 11, jquery: true */`

This allows the JShint validator to recognize modern ES6 methods, such as: `let`, `const`, `template literals`, `arrow functions (=>)`, etc.

**IMPORTANT**: External resources

Sometimes we'll write JavaScript that imports variables from other files, such as "an array of questions" from `questions.js`, which are used within the main `script.js` file elsewhere. If that's the case, the JShint validation tool doesn't know how to recognize "unused variables" that would normally be imported locally when running your own project. These warnings are acceptable, so showcase on your screenshot(s).

The same thing applies when using external libraries such as Stripe, Leaflet, Bootstrap, Materialize, etc. To instantiate these components, we need to use their respective declarator. Again, the JShint validation tool would flag these as "undefined/unused variables". These warnings are acceptable, so showcase on your screenshot(s).

⚠️ --- END --- ⚠️

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets | [country-data.js](https://github.com/angela64711/second-milestone-project/blob/main/assets/js/country-data.js) |  | ![screenshot](documentation/validation/js-assets-country-data.png) | ⚠️ Notes (if applicable) |
| assets | [script.js](https://github.com/angela64711/second-milestone-project/blob/main/assets/js/script.js) |  | ![screenshot](documentation/validation/js-assets-script.png) | ⚠️ Notes (if applicable) |


## Responsiveness

I've tested my deployed project to check for responsiveness issues.

| Page | Mobile | Tablet | Desktop | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](documentation/responsiveness/mobile-home.png) | ![screenshot](documentation/responsiveness/tablet-home.png) | ![screenshot](documentation/responsiveness/desktop-home.png) | Works as expected |
| Game | ![screenshot](documentation/responsiveness/mobile-game.png) | ![screenshot](documentation/responsiveness/tablet-game.png) | ![screenshot](documentation/responsiveness/desktop-game.png) | Works as expected |
| 404 | ![screenshot](documentation/responsiveness/mobile-404.png) | ![screenshot](documentation/responsiveness/tablet-404.png) | ![screenshot](documentation/responsiveness/desktop-404.png) | Works as expected |

## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Page | Chrome | Firefox | Edge | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](documentation/browsers/) | ![screenshot](documentation/browsers/) | ![screenshot](documentation/browsers/) | Works as expected |
| Game | ![screenshot](documentation/browsers/) | ![screenshot](documentation/browsers/) | ![screenshot](documentation/browsers/) | Works as expected |
| 404 | ![screenshot](documentation/browsers/) | ![screenshot](documentation/browsers/) | ![screenshot](documentation/browsers/) | Works as expected |

## Lighthouse Audit

⚠️ INSTRUCTIONS ⚠️

Use this space to discuss testing the live/deployed site's Lighthouse Audit reports. Avoid testing the local version (Gitpod/VSCode/etc.), as this can have knock-on effects for performance. If you don't have "Lighthouse" in your Developer Tools, it can be added as an [extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk).

Unless your project is a single-page application (SPA), you should test Lighthouse Audit results for all of your pages, for both *mobile* and *desktop*.

**IMPORTANT**: You must provide screenshots of the results, to "prove" that you've actually tested them.

⚠️ --- END --- ⚠️

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues. Some warnings are outside of my control, and mobile results tend to be lower than desktop.

| Page | Mobile | Desktop |
| --- | --- | --- |
| Start | ![screenshot](documentation/lighthouse/mobile-start.png) | ![screenshot](documentation/lighthouse/desktop-start.png) |
| Quiz | ![screenshot](documentation/lighthouse/mobile-quiz.png) | ![screenshot](documentation/lighthouse/desktop-quiz.png) |
| Results | ![screenshot](documentation/lighthouse/mobile-results.png) | ![screenshot](documentation/lighthouse/desktop-results.png) |
| 404 | ![screenshot](documentation/lighthouse/mobile-404.png) | ![screenshot](documentation/lighthouse/desktop-404.png) |

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page/Feature | Expectation | Test | Result | Screenshot |
| --- | --- | --- | --- | --- |
| Welcome page / game setup | The quiz should only start with valid game settings. | Open the modal, leave the default selections unchanged, and start the game. Repeat with each valid mode and question count. | Pass – the game starts correctly with valid stored settings, preventing an undefined start state. | ![screenshot](documentation/defensive/) |
| Quiz page / stored settings validation | The quiz page should only load when valid mode and question count values exist in storage. | Start a game normally and verify that the correct mode and question count are loaded on the quiz page. | Pass – quiz settings are loaded correctly and only valid values are accepted. | ![screenshot](documentation/defensive/) |
| Quiz page / one answer per question | Each question should only be processed once. | Click one answer, then try clicking other answers again during the same question. | Pass – only the first click is accepted and no additional answer is processed | ![screenshot](documentation/defensive/) |
| Quiz page / score protection | The score should never increase more than once for the same question. | Select an answer and attempt repeated or rapid extra clicks on answer buttons. | Pass – score is only updated once because the question is locked after the first answer. | ![screenshot](documentation/defensive/) |
| Quiz page / question state reset | After moving to the next question, the answer lock should reset so the new question can be answered normally. | Answer one question, wait for the next question to load, then answer again. | Pass – each new question accepts one answer normally, showing that the answer state resets correctly between rounds. | ![screenshot](documentation/defensive/) |
| Quiz page / browser Back button during quiz | Using the browser Back button during an active quiz should return the user to a safe state. | Start a quiz, answer one or more questions, then press the browser Back button. | Pass – the user is returned to the homepage, preventing continuation in an unsafe or broken quiz state. | ![screenshot](documentation/defensive/calc-speed.png) |
| Results page / browser Back button after completion | Using browser history after finishing the quiz should not restore an old answered question or allow score manipulation. | Complete a quiz, reach the results page, then press the browser Back button. | Pass – the app starts a fresh quiz instead of allowing access to a previously answered question, so completed answers and scores cannot be changed. | ![screenshot](documentation/defensive/) |
| Quiz page / refresh during active game | Refreshing the quiz page should not preserve a broken or stale question state. | Start a quiz, answer a few questions, then refresh the page. | Pass – the quiz reloads safely as a new game, preventing reuse of stale progress. | ![screenshot](documentation/defensive/) |
| Results page / refresh after completion | Refreshing the results page should preserve valid results without breaking the page. | Complete a quiz, reach the results page, then refresh the browser. | Pass – the results remain valid and display the stored score correctly. | ![screenshot](documentation/defensive/) |
| Results page / stored result validation | The results page should only display sensible score data. | Finish a game and verify that the displayed score matches the total number of questions and remains within a valid range. | Pass – the results page displays valid stored results only, helping prevent broken or manipulated result states. | ![screenshot](documentation/defensive/) | 
| Deployed site / cross-device testing | Defensive safeguards should work consistently outside the local development environment. | Test the deployed site on another device or browser and repeat Back button and refresh checks. | Test the deployed site on another device or browser and repeat Back button and refresh checks. | ![screenshot](documentation/defensive/) |
| Results page / data validation | Results should only display valid score data. | Attempt to load results page with invalid or missing stored values. | Pass – invalid data triggers redirect, preventing broken or manipulated results.| ![screenshot](documentation/defensive/) |
| Quiz logic / country selection | A country should not appear more than once per game. | Play through a full quiz and observe country repetition. | Pass – previously used countries are tracked and excluded, preventing duplicates. | ![screenshot](documentation/defensive/) |
| Quiz logic / answer generation | Each question should display unique answer options. | Check multiple questions for repeated answer choices. | Pass – wrong answers are filtered to ensure unique options. | ![screenshot](documentation/defensive/) |
| 404 Error Page | Feature is expected to display a 404 error page for non-existent pages. | Navigated to an invalid URL (e.g., `/test`) to test error handling. | A custom 404 error page was displayed as expected. | ![screenshot](documentation/defensive/404.png) |

## User Story Testing

| Target | Expectation | Outcome | Screenshot |
| --- | --- | --- |
| As a player | I want to choose the type of quiz (guess the country from the flag or guess the capital) | so that I can play the type of challenge I prefer. | ![screenshot](documentation/features/feature01.png) |
| As a player | I want to choose how many questions the quiz contains | so that I can play a short or longer game depending on my schedule. | ![screenshot](documentation/features/feature02.png) |
| As a player | I want a clear way to start the quiz after choosing my settings | so that the game begins with the options I selected. | ![screenshot](documentation/features/feature03.png) |
| As a player | I want each quiz to display clear visual information (such as a flag or country name) | so that I can answer the question. | ![screenshot](documentation/features/feature04.png) |
| As a player | I want to select one answer option for each question | so that I can submit my response. | ![screenshot](documentation/features/feature05.png) |
| As a player | I wan to know immediatelly whether my answer is correct or incorrect | so that I can improve my knowledge while playing. | ![screenshot](documentation/features/feature06.png) |
| As a player | I want to move to the next question after answering | so that I can continue the game smoothly. | ![screenshot](documentation/features/feature07.png) |
| As a player | I want to see my final score at the end of the quiz | so that I know how well I performed. | ![screenshot](documentation/features/feature08.png) |
| As a player | I want to easily start a new quiz after finishing one | so that I can try to improve my score. | ![screenshot](documentation/features/feature09.png) |
| As a player | I want the purpose of the game and how to play to be immediately clear | so that I can start playing without confusion. | ![screenshot](documentation/features/feature10.png) |
| As a player | I want buttons that are large and easy to tap | so that I can comfortably play the game on a phone or tablet. | ![screenshot](documentation/features/feature11.png) |
| As a player | I want sufficient color contrast in the interface | so that I can read the content and understand feedback clearly. | ![screenshot](documentation/features/feature12.png) |
| As a player | I want a helpful error page with a way back to the homepage | so that I can continue using the site. | ![screenshot](documentation/features/feature13.png) |


## Bugs

⚠️ INSTRUCTIONS ⚠️

Nobody likes bugs,... except the assessors! Projects seem more suspicious if a student doesn't properly track their bugs. If you're about to submit your project without any bugs listed below, you should ask yourself why you're doing this course in the first place, if you're able to build this entire application without running into any bugs. The best thing you can do for any project is to document your bugs! Not only does it show the true stages of development, but think of it as breadcrumbs for yourself in the future, should you encounter the same/similar bug again, it acts as a gentle reminder on what you did to fix the bug.

If/when you encounter bugs during the development stages of your project, you should document them here, ideally with a screenshot explaining what the issue was, and what you did to fix the bug.

Alternatively, an improved way to manage bugs is to use the built-in **[Issues](https://www.github.com/angela64711/second-milestone-project/issues)** tracker on your GitHub repository. This can be found at the top of your repository, the tab called "Issues".

If using the Issues tracker for bug management, you can simplify the documentation process for testing. Issues allow you to directly paste screenshots into the issue page without having to first save the screenshot locally. You can add labels to your issues (e.g. `bug`), assign yourself as the owner, and add comments/updates as you progress with fixing the issue(s). Once you've solved the issue/bug, you should then "Close" it.

When showcasing your bug tracking for assessment, you can use the following examples below.

⚠️ --- END --- ⚠️

### Fixed Bugs

[![GitHub issue custom search](https://img.shields.io/github/issues-search/angela64711/second-milestone-project?query=is%3Aissue%20is%3Aclosed%20label%3Abug&label=Fixed%20Bugs&color=green)](https://www.github.com/angela64711/second-milestone-project/issues?q=is%3Aissue+is%3Aclosed+label%3Abug)

I've used [GitHub Issues](https://www.github.com/angela64711/second-milestone-project/issues) to track and manage bugs and issues during the development stages of my project.

All previously closed/fixed bugs can be tracked [here](https://www.github.com/angela64711/second-milestone-project/issues?q=is%3Aissue+is%3Aclosed+label%3Abug).

![screenshot](documentation/bugs/gh-issues-closed.png)

### Unfixed Bugs

⚠️ INSTRUCTIONS ⚠️

You will need to mention any unfixed bugs and why they are not fixed upon submission of your project. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. Where possible, you must fix all outstanding bugs, unless outside of your control.

If you've identified any unfixed bugs, no matter how small, be sure to list them here! It's better to be honest and list them, because if it's not documented and an assessor finds the issue, they need to know whether or not you're aware of them as well, and why you've not corrected/fixed them.

⚠️ --- END --- ⚠️

[![GitHub issue custom search](https://img.shields.io/github/issues-search/angela64711/second-milestone-project?query=is%3Aissue%2Bis%3Aopen%2Blabel%3Abug&label=Unfixed%20Bugs&color=red)](https://www.github.com/angela64711/second-milestone-project/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

Any remaining open issues can be tracked [here](https://www.github.com/angela64711/second-milestone-project/issues?q=is%3Aissue+is%3Aopen+label%3Abug).

![screenshot](documentation/bugs/gh-issues-open.png)

### Known Issues

| Issue | Screenshot |
| --- | --- |
| The project is designed to be responsive from `375px` and upwards, in line with the material taught on the course LMS. Minor layout inconsistencies may occur on extra-wide (e.g. 4k/8k monitors), or smart-display devices (e.g. Nest Hub, Smart Watches, Gameboy Color, etc.), as these resolutions are outside the project’s scope, as taught by Code Institute. | ![screenshot](documentation/issues/poor-responsiveness.png) |
| When validating HTML with a semantic `<section>` element, the validator warns about lacking a header `h2-h6`. This is acceptable. | ![screenshot](documentation/issues/section-header.png) |

> [!IMPORTANT]  
> There are no remaining bugs that I am aware of, though, even after thorough testing, I cannot rule out the possibility.

