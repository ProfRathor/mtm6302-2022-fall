// get imageContainer
const $imgContainer = document.getElementById('img-container')
// get modal
const $modal = document.querySelector('.modal')

// empty array to store image elements/tags (created dynamically)
const imgArr = []

//imagesObject that has information about various images
const imagesObject = [
  {
    src: 'http://eisenbm.edumedia.ca/codepen/images/cat-300.jpg',
    large: 'http://eisenbm.edumedia.ca/codepen/images/cat-2400.jpg',
    caption: 'Image by Dimitri Houtteman from Pixabay',
    alt: 'Kitten image',
  },

  {
    src: 'https://images.pexels.com/photos/13270850/pexels-photo-13270850.jpeg',
    large:
      'https://images.pexels.com/photos/13270850/pexels-photo-13270850.jpeg',
    caption: 'Image from Pexel',
    alt: 'Desert image',
  },
]

// for-of loop to create the img tags from imagesObject and push it to the imgArr, using required attributes such as src, alt and data-*
for (const imageData of imagesObject) {
  imgArr.push(`<img class="thumb" src="${imageData.src}" alt="${imageData.alt}" data-large="${imageData.large}" data-caption="${imageData.caption}">
  `)
}

//Add the img tags to the image container element
$imgContainer.innerHTML = imgArr.join('')

// attach the event listener to the imgContainer
//use delegation to target thumbnails
$imgContainer.addEventListener('click', function (e) {
  const $thumb = e.target.closest('.thumb')
  $modal.innerHTML = `
    <img src="${$thumb.dataset.large}">   
    <small>${$thumb.dataset.source}</small>`
  $modal.classList.add('show')
})

$modal.addEventListener('click', function () {
  $modal.classList.remove('show')
})
