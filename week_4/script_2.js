
// defining the add function

const c = 20
// printing c outside function
console.log(c)

function add(a,b) {
    const d = 100
    // printing c inside function
    console.log(c);
    console.log(d);
    return a + b
}
add(1,1)
console.log(d);
// invoking the add function
// a = 7
// b = 8
// console.log(add(7, 8)) 
// console.log(add(100, 800)) 
// console.log(add(13, 12)) 

//Standard anonymous function syntax
document.addEventListener('DOMContentLoaded', function (event) {
    console.log('The document is ready!')
})


function response(event) {
    console.log('The document is ready!')
}

//Using a predefined function
document.addEventListener('DOMContentLoaded', response)