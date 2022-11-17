// Step 1 : get the formElement
const $infoForm = document.getElementById('user-info')
const $clearBtn = document.getElementById('clear-storage')
// User Info Object
const userInfo = {
  first_name: '',
  last_name: '',
  fav_color: '',
}

// Step 6 (But happens on page load)
// Get the the value of localStorage item with key userData
const localStorageUserData = JSON.parse(localStorage.getItem('userData'))
// If localStorageUserData is set and not null, use that to set the values of userInfo Object
if (localStorageUserData) {
  userInfo = localStorageUserData
}
// Step 7 (But happens on page load)
// Use the Local Storage UserInfo to update the Sentence
setUserChoices(userInfo)
// Nice to have : Reset the Form Values
resetValues()

// Step 2 : Add event Listener on the Submit Event of the Form
$infoForm.addEventListener('submit', function (e) {
  //Prevent Page Refresh
  e.preventDefault()
  // Step 3 : Get the user Submitted Data and store it in the userInfo Object
  for (const element of $infoForm.elements) {
    // skip the button, so we check for .name to be present
    if (element.name) {
      console.log(`${element.name} : ${element.value}`)
      //  key is element.name, example first_name, last_name, fav_color
      //  value is element.value examample First, Last, Red
      userInfo[element.name] = element.value
    }
  }

  // Step 4: Store the UserInfo Object in localStorage item called userData
  const string = JSON.stringify(userInfo)
  localStorage.setItem('userData', string)

  // Step 5 : Use the userInfo Object to update the Sentence
  setUserChoices(userInfo)

  // Nice to have : Reset the Form Values
  resetValues()
})

// Nice to Have : Allow the user to clear Local Storage values
$clearBtn.addEventListener('click', function (e) {
  e.preventDefault()
  localStorage.removeItem('userData')
  const userInfo = {
    first_name: '',
    last_name: '',
    fav_color: '',
  }
  setUserChoices(userInfo)
})

/**
 * Function to set User Choices
 * @param {*} userInfo
 */
function setUserChoices(userInfo) {
  $userName = document.getElementById('user-name')
  $userColor = document.getElementById('user-color')

  $userName.textContent = `${userInfo.first_name} ${userInfo.last_name}`
  $userColor.textContent = userInfo.fav_color
}
/**
 * Function to reset form values
 */
function resetValues() {
  for (const element of $infoForm.elements) {
    element.value = ''
  }
}
