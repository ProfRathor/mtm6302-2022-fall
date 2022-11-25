/****************************
 * Regular Variables
 ***************************/
let currentUserId = 1;
let userFav = [];

/****************************
 * DOM Variables
 *************************/
const $userInfo = document.getElementById('user-info');
const $favList = document.getElementById('fav-list');
const $nextUser = document.getElementById('next-user');
const $clearFav = document.getElementById('clear-fav');



/****************************
 * Static Function
 ***************************/

/**
 * Creates HTML for User Row 
 * @param Object userData
 *  object containing JSON information for a user
 * @param Bool addButton 
 *  allows the user to add a Favourites button 
 * @returns HTML built fron user Data
 */
function createUserRowHTML(userData, addButton = false) {
    let buttonHTML = '';
    const basicUseHTML = `
    <p>Id: ${userData.id}</p>
    <p>Name: ${userData.name}</p>
    <p>Email: ${userData.email}</p>
    <p>Phone: ${userData.phone}</p>
    <p>Website: ${userData.website}</p>`

    if (addButton) {
        buttonHTML = `<button class="add-to-fav" data-user-id="${userData.id}">Add to Favourites</button>`
    }
    return basicUseHTML + buttonHTML;
}

/**
 * This function builds html for Favourites
 */
function addFavListHTML() {
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

//Add async Keyword to create an asynchronous function 
//This would treat fetch as a Promise
//Add async Keyword to create an asynchronous function 
//This would treat fetch as a Promise
async function fetchDataReturn(userId, addButton) {
    // call fetch using await keyword 
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + userId)
    // call response.json using await keyword 
    const json = await response.json()
    // This is a fail safe 
    // check if the reponse actually has an id 
    if (json.id && json.id > 0) {
        return createUserRowHTML(json, addButton)
    }
    return "";
}

async function createFavListHTML() {
    const userFavHTMLArr = [];
    for (let i = 0; i < userFav.length; i++) {
        const returnHtml = await fetchDataReturn(userFav[i], false)
        userFavHTMLArr.push(returnHtml)
    }
    $favList.innerHTML = userFavHTMLArr.join("<hr>");
}

/**
 * Add user info HTML
 * @param Integer userId 
 *  Id of the user to fetch the information
 */
async function addUserInfoHTML(userId) {
    const returnHtml = await fetchDataReturn(userId, true)
    $userInfo.innerHTML = returnHtml;
}


/****************************
 * Event Listeners
 ***************************/

$userInfo.addEventListener('click', function (e) {
    // Event Delegation for add-to-fav button
    if (e.target.classList.contains('add-to-fav')) {
        const targetUserId = e.target.dataset.userId;
        // check if this user does not exist first
        if (!userFav.includes(targetUserId)) {
            userFav.push(targetUserId);
            updateStorageItem();
            createFavListHTML();
        }
    }
});

$nextUser.addEventListener('click', function (e) {
    currentUserId++;
    addUserInfoHTML(currentUserId);
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
addUserInfoHTML(1);