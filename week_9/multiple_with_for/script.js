const box = document.getElementById('box')
const buttons = document.querySelectorAll('.button')

function animateBox (e) {
  const button = e.target
  console.log(e.target);
  console.log(button.dataset.animation);
  box.className = `
    box 
    animated 
    infinite 
    ${button.dataset.animation}`
  box.textContent = button.dataset.animation
}

for (const button of buttons) {
  button.addEventListener('click', animateBox)
}