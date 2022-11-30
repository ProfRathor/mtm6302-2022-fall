/****************************
 * Regular Variables
 ***************************/
let userFav = [];

/****************************
 * DOM Variables
 *************************/
const $dataOutput = document.getElementById('data-output');
const $moreDataOutput = document.getElementById('more-data');

const $favList = document.getElementById('fav-list');
const $fetch = document.getElementById('fetch');
const $clearFav = document.getElementById('clear-fav');

const baseURL = "https://pokeapi.co/api/v2/pokemon/";


/****************************
 * Static Function
 ***************************/
function parseUrl(url) {
    return url.substring(url.substring(0, url.length - 2).lastIndexOf('/') + 1, url.length - 1)
}

function getPokemonImageSmall(id) {
    return ` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

function getPokemonImageLarge(id) {
    return ` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}


function createListDataHTML(jsonData) {
    let basicList = '<ul>';
    for (const pokemonData of jsonData.results) {
        basicList += '<li>' + createPokemonHTML(pokemonData) + '</li>';
    }

    basicList += '</ul>'
    const moreBtn = `<button class="get-more" data-url="${jsonData.next}">More</button>`
    return basicList + moreBtn;
}

function createPokemonHTML(pokemonData) {
    const pokemonId = parseUrl(pokemonData.url)
    const smallImage = getPokemonImageSmall(pokemonId)

    // if (addButton) {
    const favBtn = `<button class="add-to-fav" data-id="${pokemonId}">Catch</button>`
    const SeeMore = `<button class="see-details" data-id="${pokemonId}">See More</button>`
    // }
    return `
    <p>Name: ${pokemonData.name}</p>
    <p>Id: ${pokemonId}</p>
    <p>Small Image: ${smallImage}</p>
    <p>${favBtn}</p>
    <p>${SeeMore}</p>
    `
}

function createSingleDataHTML(pokemonData, isFav = false) {
    console.log(pokemonData);
    let basicHTML = '';
    const largeImage = getPokemonImageLarge(pokemonData.id)
    basicHTML += `
    <p>Name: ${pokemonData.name}</p>
    <p>Large Image: ${largeImage}</p>
    <p>Height: ${pokemonData.height}</p>
    <p>Weight: ${pokemonData.weight}</p>
    <p>Experience: ${pokemonData.base_experience}</p>
    `

    // Add or remove things if fav 
    if (isFav) {
        basicHTML += `<p>This is from Fav</p>`
    }

    return basicHTML;
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
async function fetchDataReturnList(url) {
    // call fetch using await keyword 
    const response = await fetch(url)
    // call response.json using await keyword 
    const json = await response.json()
    console.log(json);
    // This is a fail safe 
    // check if the reponse actually has an date 
    if (json.results) {
        return createListDataHTML(json)
    }
    return "";
}


async function fetchDataReturnSingle(id, isFav) {
    // call fetch using await keyword 
    const response = await fetch(baseURL + id)
    // call response.json using await keyword 
    const json = await response.json()
    console.log(json);
    // This is a fail safe 
    // check if the reponse actually has an date 
    if (json.id) {
        return createSingleDataHTML(json, isFav)
    }
    return "";
}

async function createFavListHTML() {
    const userFavHTMLArr = [];
    for (let i = 0; i < userFav.length; i++) {
        const returnHtml = await fetchDataReturnSingle(userFav[i], true)
        userFavHTMLArr.push(returnHtml)
    }
    $favList.innerHTML = userFavHTMLArr.join("<hr>");
}

async function getListDataHtml(url) {
    const returnHtml = await fetchDataReturnList(url)
    $dataOutput.innerHTML = returnHtml;
}


async function getDetailsDataHtml(id) {
    const returnHtml = await fetchDataReturnSingle(id, false)
    $moreDataOutput.innerHTML = returnHtml;
}



/****************************
 * Event Listeners
 ***************************/

$dataOutput.addEventListener('click', function (e) {
    // Event Delegation for add-to-fav button
    if (e.target.classList.contains('add-to-fav')) {
        const pokemonId = e.target.dataset.id;
        // check if this pokemon id does not exist first
        if (!userFav.includes(pokemonId)) {
            userFav.push(pokemonId);
            updateStorageItem();
            createFavListHTML();
        }
    }

    // Event Delegation for get-more button
    if (e.target.classList.contains('get-more')) {
        const fetchUrl = e.target.dataset.url;
        getListDataHtml(fetchUrl)
    }

    // Event Delegation for see-details button
    if (e.target.classList.contains('see-details')) {
        const pokemonId = e.target.dataset.id;
        getDetailsDataHtml(pokemonId)
    }

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
//get first 20
getListDataHtml(baseURL);
createFavListHTML();