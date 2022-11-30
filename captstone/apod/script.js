/****************************
 * Regular Variables
 ***************************/
let userFav = [];
// Get your own API key
const apiKey = 'MZSmvgZe275zKhUN3SRFfJ6CDMzfAsLKerJbrGzH'

/****************************
 * DOM Variables
 *************************/
const $dataOutput = document.getElementById('data-output');
const $favList = document.getElementById('fav-list');
const $fetch = document.getElementById('fetch');
const $clearFav = document.getElementById('clear-fav');



/****************************
 * Static Function
 ***************************/

function createDataRowHTML(jsonData, addButton = false, isFav = false) {
    let buttonHTML = '';
    let basicHTML = `
    <p>Date: ${jsonData.date}</p>
    <p>HD URL: ${jsonData.hdurl}</p>
    <p>URL: ${jsonData.url}</p>
    <p>Title: ${jsonData.title}</p>
    <p>Media Type: ${jsonData.media_type}</p>`

    // Add or remove things if fav 
    if (isFav) {
        basicHTML += `<p>This is from Fav</p>`
    }

    if (addButton) {
        buttonHTML = `<button class="add-to-fav" data-date="${jsonData.date}">Add to Favourites</button>`
    }
    return basicHTML + buttonHTML;
}

function getStorageItemInfo() {
    if (localStorage.getItem('userFavourites')) {
        return localStorageUserData = JSON.parse(localStorage.getItem('userFavourites'))
    }

    return [];
}

function updateStorageItem() {
    const string = JSON.stringify(userFav)
    localStorage.setItem('userFavourites', string)
}

/****************************
 * Async Functions
 ***************************/

async function fetchDataReturn(date, addButton, isFav) {
    // call fetch using await keyword 
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=' + apiKey + '&date=' + date)
    // call response.json using await keyword 
    const json = await response.json()
    console.log(json);
    // This is a fail safe 
    // check if the reponse actually has a date 
    if (json.date) {
        return createDataRowHTML(json, addButton, isFav)
    }
    return "";
}

async function createFavListHTML() {
    const userFavHTMLArr = [];
    for (let i = 0; i < userFav.length; i++) {
        const returnHtml = await fetchDataReturn(userFav[i], false, true)
        userFavHTMLArr.push(returnHtml)
    }
    $favList.innerHTML = userFavHTMLArr.join("<hr>");
}

async function getDataHTML(date) {
    const returnHtml = await fetchDataReturn(date, true, false)
    $dataOutput.innerHTML = returnHtml;
}


/****************************
 * Event Listeners
 ***************************/
$dataOutput.addEventListener('click', function (e) {
    // Event Delegation for add-to-fav button
    if (e.target.classList.contains('add-to-fav')) {
        const targetDate = e.target.dataset.date;
        // check if this targetDate does not exist first
        if (!userFav.includes(targetDate)) {
            userFav.push(targetDate);
            updateStorageItem();
            createFavListHTML();
        }
    }
});

$fetch.addEventListener('click', function (e) {
    // You would replace this with the date from user input date field
    const date = "2022-11-01"
    getDataHTML(date);
});

$clearFav.addEventListener('click', function (e) {
    localStorage.setItem('userFavourites', '')
    userFav = [];
    createFavListHTML();
});



/****************************
 * Global Calls 
 *************************/
userFav = getStorageItemInfo();
createFavListHTML();


