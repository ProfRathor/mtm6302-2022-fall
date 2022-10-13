/**
 * Scenario 1 : Static HTML
 */
const $container = document.getElementById("container");

let title = 'Animals' 
title = 'Not Animals';

const list = `
<h2>${title}</h2>
<ul>
  <li>cat</li>
  <li>dog</li>
  <li>mouse</li>
</ul>`

$container.innerHTML = list;

/**
 * Scenario 2 : Statically Dymanic HTML
 */
const fruits = ['banana','apple', 'kiwi'];
title = 'Fruits'
const list2 = `
<h2>${title}</h2>
<ul>
  <li>${fruits[0]}</li>
  <li>${fruits[1]}</li>
  <li>${fruits[2]}</li>
</ul>`

const $container2 = document.getElementById("container_2");

$container2.innerHTML = list2;

/**
 * Scenario 3 : Fully Dynamic HTML (Best)
 */
 const $container3 = document.getElementById("container_3");

 // Step 1 : Define the Information array
 const sports = ['hockey','football', 'tennis', 'rugby'];

 title = 'Sports'

// Step 2 : Create Individual Item HTML and store it as an array
const items = [];
for (const sport of sports) {
    items.push(`<li>${sport}</li>`)
}
//Step 3 : use the Individual Item HTML and join them together using .join function 
 const list3 = `
 <h2>${title}</h2>
 <ul>
    ${items.join('')}
</ul>`

// Step 4 : Add the template literal to the HTML element
$container3.innerHTML = list3;

/**
 * Scenario 4 : Repeating innerHTML (Poor Performance : Avoid using this)
 */

 const $container4 = document.getElementById("container_4");

 $container4.innerHTML = '<h2>Sports 2</h2>';
 $container4.innerHTML += '<ul>';
 // OR  $container4.innerHTML =  $container4.innerHTML + '<new>HTML</new>'
 for (const sport of sports) {
    $container4.innerHTML += `<li>${sport}</li>`;
}

$container4.innerHTML += '</ul>';

/** 
 * Scenario 5 : Using Methods
 */

 const $container5 = document.getElementById("container_5");

 const $about = document.createElement('a')
 $about.href = 'about.html'
 $about.textContent = 'About'
 
 $container5.appendChild($about);


 