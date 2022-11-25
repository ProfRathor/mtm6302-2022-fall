const userArr = [];
$userInfo = document.getElementById('users-info');

function createUserRowHTML(userData) {
    return `
    <p>Id: ${userData.id}</p>
    <p>Name: ${userData.name}</p>
    <p>Email: ${userData.email}</p>
    <p>Phone: ${userData.phone}</p>
    <p>Website: ${userData.website}</p>
    <p>Company: ${userData.company.name}</p>
    <button class="add-to-fav">Add to Fav</button>
`
}
//Add async Keyword to create an asynchronous function 
//This would treat fetch as a Promise
async function fetchData() {
    // call fetch using await keyword 
    const response = await fetch('https://jsonplaceholder.typicode.com/users/')
    // call response.json using await keyword 
    const json = await response.json()
    // This is a fail safe 
    // check if the reponse Object has atleast 1 row
    if (Object.keys(json).length > 0) {
        for (const userData of json) {
            const userRowHTML = createUserRowHTML(userData)
            userArr.push(userRowHTML)
        }
        $userInfo.innerHTML = userArr.join('<hr>');
    } else {
        $userInfo.innerHTML = `Response is empty`
    }
}

fetchData();