const $img = document.querySelector('img')
console.log($img.dataset.large) // cat-2400.jpg

//The custom names become properties of dataset with the kebab-case being converted to camel-case
//img-source
console.log($img.dataset.imgSource) // cat-2400.jpg

console.log($img.dataset)

// const $img = document.querySelector('img')
const $modal = document.querySelector('.modal')

$img.addEventListener('click', function () {
  $modal.innerHTML = `
    <img src="${$img.dataset.large}">   
    <small>${$img.dataset.source}</small>`
  $modal.classList.add('show')
})

$modal.addEventListener('click', function () {
  $modal.classList.remove('show')
})

const $link = document.getElementById('link')
console.log($link.getAttribute('id')) // link
console.log($link.getAttribute('href')) // https://facebook.com

$link.setAttribute('href', 'https://twitter.com') // updates the attribute
$link.setAttribute('target', '_blank') // adds a new attribute

$link.removeAttribute('href')
