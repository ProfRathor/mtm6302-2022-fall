/****************************
 * Regular Variables
 ***************************/
let currentUserId = 1;
let userFav = [];
let userFavHTMLArr = [];


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
 * Add user info HTML
 * @param HTML userInfoHTML 
 * HTML that would be needed to build the innerHTML property of the div with id userInfo
 */
function addUserInfoHTML(userInfoHTML) {
    $userInfo.innerHTML = userInfoHTML;
}

/**
 * This function builds html for Favourites
 */
function addFavListHTML() {
    $favList.innerHTML = userFavHTMLArr.join("<hr>");
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

function createFavList() {
    userFavHTMLArr = [];
    for (let i = 0; i < userFav.length; i++) {
        fetchData(userFav[i], false, 'fav-list');
    }
}

/****************************
 * Async Functions
 ***************************/

//Add async Keyword to create an asynchronous function 
//This would treat fetch as a Promise
async function fetchData(userId, addButton = false, destinationDiv = 'user-info') {
    // call fetch using await keyword 
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + userId)
    // call response.json using await keyword 
    const json = await response.json()
    // This is a fail safe 
    // check if the reponse actually has an id 
    if (json.id && json.id > 0) {
        userRowHTML = createUserRowHTML(json, addButton)
        if (destinationDiv === 'user-info') {
            addUserInfoHTML(userRowHTML);
        }

        if (destinationDiv === 'fav-list') {
            userFavHTMLArr.push(userRowHTML);
            addFavListHTML();
        }
    }
    console.log(`No user found with id "${userId}"`)
}

/****************************
 * Event Listeners
 ***************************/

$userInfo.addEventListener('click', function (e) {
    // Event Delegation for add-to-fav button
    if (e.target.classList.contains('add-to-fav')) {
        const targetUserId = e.target.dataset.userId;
        userFav.push(targetUserId);
        updateStorageItem();
        createFavList();
    }
});

$nextUser.addEventListener('click', function (e) {
    currentUserId++;
    fetchData(currentUserId, true);
});

$clearFav.addEventListener('click', function (e) {
    localStorage.setItem('userFavourites', '')
    userFavHTMLArr = [];
    addFavListHTML();
});



/****************************
 * Global Calls 
 *************************/
userFav = getStorageItemInfo();
createFavList();
$userInfo.innerHTML = createUserRowHTML(fetchData(1, true));