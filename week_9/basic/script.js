const $button = document.getElementById('button')
const $listen = document.getElementById('listen')


// $domElement.addEventListener("EVENT_TYPE", "FUNCTION")

//  $domElement = any selected dom element such as a button, a tag etc. 
//EVENT_TYPE = 
    // mouse Events : click, mouseover, and mouseout.
    // Keyboard Events : keydown, keyup, and keypress
// FUNCTION : anonymous function or predefined function

// using an anonymous function
$button.addEventListener('mouseover', function() {
    $listen.textContent = `Don't you do it!`
  })
  
  $button.addEventListener('click', function() {
    $listen.textContent = `You clicked the button!`
  })
  
  $button.addEventListener('mouseout', function() {
    $listen.textContent = `Don't do it again!`
  })
  
  



const $button2 = document.getElementById('button2')

// a predefined function
function handleButtonClick () {
    console.log('The button 2 was clicked!')
}

// using a predefined function
$button2.addEventListener('click', handleButtonClick)





const keypress = document.getElementById('keypress')
const keydown = document.getElementById('keydown')
let timer1 = null
let timer2 = null


document.addEventListener('keypress', function(e) {
  console.log(e);
  keypress.innerHTML = `
    <div>
      <h4>Keypress</h4><br>
      ${e.key}
    </div>`
})

document.addEventListener('keydown', function(e) {
  keydown.innerHTML = `
    <div>
      <h4>Keydown</h4><br>
      ${e.key}
    </div>`
})



const days = document.getElementById('days')
const day = document.getElementById('day')

days.addEventListener('change', function (e) {
  // e.target gives you access to the element that is being targetted in this current event
  console.log(e.target);
  day.textContent = e.target.value;
})

