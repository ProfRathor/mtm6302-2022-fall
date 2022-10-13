/**************
 * Basic DOM
 * ************/
const baseColor = 'green'
// to get an element from the DOM by ID
// when getting DOM elements, variable declaration starts with $
const $box = document.getElementById('box')
// console.log($box)

$box.textContent = 'I am not a box'

const $box1 = document.querySelector('.box')
$box1.textContent = 'I am not a box'


const list = document.getElementById('list')
const items = list.children
console.log(items);
// 0,1,2
items[1].style.textDecoration = 'line-through'

const $firstItem = list.firstElementChild // HTML Element
const $nextItem = $firstItem.nextElementSibling // HTML Element

$firstItem.style.backgroundColor = '#fff3cd'
$nextItem.style.color = 'red'

/**************
 * Attributes
 * ****** */
const social = document.getElementById('social')

const facebook = social.firstElementChild
const href = facebook.getAttribute('href')
facebook.textContent = href
facebook.setAttribute('href', 'https://facebook.ca') // updates the attribute
facebook.setAttribute('target', '_blank') // adds a new attribute

const twitter = facebook.nextElementSibling
twitter.textContent = twitter.href

twitter.href = 'https://twitter.ca'

twitter.removeAttribute('href')


/**************
 * Classes
 * ************/
$link = document.getElementById('link');
 $link.classList.add('btn', 'btn-primary')

 $link.classList.toggle('my-class')


/**
 * Changing Inline Styles
 */
const $text = document.getElementById('text')

$text.setAttribute('style', `
background-color: #ddd;
color: darkgrey;
font-size: 40px;
`)

console.log($text.getAttribute('style'))


const x = 20
let y = 0

function changeY() {
    y = x * 10; 
}