const $form = document.getElementById('form')
const $values = document.getElementById('values')
let valuesArray = []
$form.addEventListener('submit', function (e) {
  //Prevent Page Refresh
  e.preventDefault()
  valuesArray = []

  // For text boxes, including the type: text, number, email, or tel, text areas, or select boxes, the value property can be used.
  for (const element of $form.elements) {
    if (
      element.name &&
      element.name != 'colorRadio' &&
      element.name != 'colorCheckbox'
    ) {
      valuesArray.push(
        `Name: ${element.name}<br>Value: ${element.value}<br><br>`,
      )
    }
  }

  // For radio buttons, the RadioNodeList can be retrieved directly from the HTMLFormControlsCollection by using the name of the radio group as a key.
  valuesArray.push(
    `Name: colorRadio<br>Value: ${$form.elements['colorRadio'].value}<br><br>`,
  )

  // for checkboxes, you would need to first check if the checked property is true, the add the value to an array
  let selectedCheckBoxValues = []
  for (checkBox of $form.elements['colorCheckbox']) {
    if (checkBox.checked === true) {
      selectedCheckBoxValues.push(checkBox.value)
    }
  }

  valuesArray.push(
    `Name: colorCheckbox<br>Value: ${selectedCheckBoxValues.join()}<br><br>`,
  )
  $values.innerHTML = valuesArray.join('')
})
