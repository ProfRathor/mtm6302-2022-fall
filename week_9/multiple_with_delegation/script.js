const $list = document.getElementById('list')
const $listItems = document.querySelectorAll('.item')

$list.innerHTML = `
<li class="item">Clean the car</li>
<li class="item">Feed the cat</li>
<li class="item">Buy milk</li>
`

// console.log($listItems);
// Using event delegation to allow targetting the elements that do not exist yet
$list.addEventListener('click', function (e) {
  const $item = e.target.closest('.item')

  if ($item) {
    $item.classList.toggle('completed')
  }
})

// Directly adding addEventListener won't work in this scenario because the elements do not exisit
// function complete(e) {
//     e.target.classList.toggle('completed')
// }
// for (const listItem of $listItems) {
//     listItem.addEventListener('click', complete)
// }
