// Fetch (Retives information from an API)
fetch('https://jsonplaceholder.typicode.com/users/1')
    // First then (convert the response to json response)
    .then(response => response.json())
    // Second then (use the json data and use it for your use case)
    .then(json => '')


let currentUserId = 1;
$userInfo = document.getElementById('user-info');
$btn = document.getElementById('next-user');

//Add async Keyword to create an asynchronous function 
//This would treat fetch as a Promise
async function fetchData(userId) {
    // call fetch using await keyword 
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + userId)
    // call response.json using await keyword 
    const json = await response.json()
    console.log(json)
    // This is a fail safe 
    // check if the reponse actually has an id 
    if (json.id && json.id > 0) {
        $userInfo.innerHTML = `
        <p>Id: ${json.id}</p>
        <p>Name: ${json.name}</p>
        <p>Email: ${json.email}</p>
        <p>Phone: ${json.phone}</p>
        <p>Website: ${json.website}</p>
        <p>Company: ${json.company.name}</p >
            `
    } else {
        $userInfo.innerHTML = `No user found with id "${userId}"<br><br>`
    }
}

$btn.addEventListener('click', function (e) {
    currentUserId++;
    fetchData(currentUserId);
});

fetchData(currentUserId);