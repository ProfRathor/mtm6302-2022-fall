/****************************
 * Regular Variables
 ***************************/
let userAns = {
    "correct": 0,
    "wrong": 0,
}
// Get your own API key
const apiKey = 't1XbcZXG0zzRnzdNVCVB51jw9jgDOMuatFKxXkJI'

/****************************
 * DOM Variables
 *************************/
const $dataOutput = document.getElementById('data-output');
const $userAnsDiv = document.getElementById('user-ans');
const $fetch = document.getElementById('fetch');
const $clearUserAns = document.getElementById('clear-user-ans');



/****************************
 * Static Function
 ***************************/

function isCorrect(CorrectAnswers, answerKey) {
    if (CorrectAnswers[`${answerKey}_correct`] === 'true') {
        return true;
    }
    return false;
}

function stripHTML(answerValue) {
    return answerValue.replace(/<[^>]+>/g, '');
}


function createAnswerHTML(answerKey, answerValue) {
    answerValue = stripHTML(answerValue);
    const isAnsCorrect = isCorrect(jsonData.correct_answers, answerKey);
    const ansHTML = `<p class="answer" data-correct="${isAnsCorrect}">${answerValue}</p>`
    return ansHTML;
}

function createDataRowHTML(jsonData) {
    const answers = [];
    let basicHTML = `
     <p>Question: ${jsonData.question}</p>`;

    for (const answerKey in jsonData.answers) {
        if (jsonData.answers[answerKey]) {
            const answerValue = jsonData.answers[answerKey];
            const ansHTML = createAnswerHTML(answerKey, answerValue)
            answers.push(ansHTML)
        }
    }

    basicHTML += '<p>Answers</p>'
    basicHTML += answers.join("<br>");

    return basicHTML;
}

/**
 * This function builds html for Favourites
 */
function showUserAnswer() {
    $userAnsDiv.innerHTML = `
    <p>Correct: ${userAns.correct}</p>
    <p>Wrong: ${userAns.wrong}</p>
    `
}

function getStorageItemInfo() {
    if (localStorage.getItem('userAns')) {
        return localStorageUserData = JSON.parse(localStorage.getItem('userAns'))
    }

    return [];
}

function updateStorageItem() {
    const string = JSON.stringify(userAns)
    localStorage.setItem('userAns', string)
}

/****************************
 * Async Functions
 ***************************/

async function fetchDataReturn(difficulty) {
    // call fetch using await keyword 
    const response = await fetch('https://quizapi.io/api/v1/questions?apiKey=' + apiKey + '&limit=1&difficulty=' + difficulty)
    // call response.json using await keyword 
    const json = await response.json()
    console.log(json);
    if (json) {
        firstQuestion = json[0];
        // This is a fail safe 
        // check if the reponse actually has an id 
        if (firstQuestion.id) {
            return createDataRowHTML(firstQuestion)
        }
    }
    return "";
}


async function getDataHTML(difficulty) {
    const returnHtml = await fetchDataReturn(difficulty)
    $dataOutput.innerHTML = returnHtml;
}


/****************************
 * Event Listeners
 ***************************/

$dataOutput.addEventListener('click', function (e) {
    // Event Delegation for answer
    if (e.target.classList.contains('answer')) {
        const isCorrect = e.target.dataset.correct;

        // is correct 
        if (isCorrect === 'true') {
            userAns.correct++;
            alert("Correct");
        } else {
            userAns.wrong++;
            alert("Wrong");
        }
        updateStorageItem();
        showUserAnswer();
    }
});

$fetch.addEventListener('click', function (e) {
    // You would replace this with the difficulty(Easy - Medium - Hard) input from user
    const difficulty = "Easy"
    getDataHTML(difficulty);
});

$clearUserAns.addEventListener('click', function (e) {
    localStorage.setItem('userAns', '')
    userAns = {
        "correct": 0,
        "wrong": 0,
    }
    showUserAnswer();
});



/****************************
 * Global Calls 
 *************************/
userAns = getStorageItemInfo();
showUserAnswer();


