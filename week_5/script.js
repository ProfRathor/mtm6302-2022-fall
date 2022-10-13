// Creates an empty array
const empty = []

// Creates an array of colors
const colors = ['blue', 'green', 'yellow', 'red', 'orange']
// 0 -> blue
// 1 -> green
// 2 -> yellow
// 3 -> red
// 4 -> orange

// Logging the FIRST color in the colors array
console.log(colors[0]) // blue

// Logging the THIRD color in the colors array. 
console.log(colors[2]) // yellow

// Logging an item that is not defined 
console.log(colors[9]) // undefined

// Replaces the FIRST item in the colors array
colors[0] = 'purple'

console.log(colors[0]) // purple

colors[3] = 'bright red'
console.log(colors[3]) // bright red

// Adds an item to the colors array
console.log(colors.push('maroon', 'pink', 'sky blue'))

console.log(colors[7]) //sky blue
// Remove the last item from an array 
colors.pop();
console.log(colors[7]) //maroon

console.log(colors[0]) //purple
// Remove the first item from an array 
colors.shift();
console.log(colors[0]) //green

colors.unshift('purple');
console.log(colors[0]) //purple

// Removes item at index 2
// .splice(START_INDEX, COUNT)
console.log(colors);

colors.splice(2, 1, 'dark green')
console.log(colors);

colors.sort() 
console.log(colors);


const primary = ['red', 'blue', 'yellow']
const secondary = ['purple', 'green', 'orange']

// concatenate two arrays
// console.log(primary.concat(secondary)) 

// Spread Syntax
console.log(...primary) 
console.log(...secondary) 
// console.log([...primary, ...secondary]) 

// get index by Value using indexOf method 
console.log(colors.indexOf('orange'));

// check if the color is present or not
console.log(colors.includes('black')) 

// if index is less than 0, than this element does not exist
console.log(colors.indexOf('black')) 


const numbers = [5, 12, 15, 8]

console.log(numbers.find(item => item > 10)) // 12
console.log(numbers.find(item => item > 20)) // undefined


console.log(colors.join()) // Apples,Bananas,Cherries

console.log(colors.join('')) // ApplesBananasCherries

console.log(colors.join(' | ')) // Apples | Bananas | Cherries

// for (initialization; condition; iteration) {...}

for (let i = 0; i < 5; i++) {
    // console.log(i) // Logs 0 to 4
  }

  let total = 0
  for (let i = 0; i < 5; i++) {
    total += i
    console.log(total, i);
  }

  console.log(total);

const animals = ['cat', 'dog', 'mouse']
console.log(animals.length);


for (let i = 0; i < animals.length; i++) {
  // Logs all the animals in the array
//   console.log(animals[0])
//   console.log(animals[1])
//   console.log(animals[2]) 
//   console.log(`Animal at index ${i} is ${animals[i]}`) 
}

for (const animal of animals) {
    // Logs all the animals in the array
    console.log(animal) 
  }

  const name = 'Ted Mosby'

for (const char of name) {
  // Logs each character of the name
  console.log(char)
}

let count = 20

while (count > 20) {
  count++
}

console.log(count) // 20

// flip the coin until heads appears (heads = 0, tails = 1)
let coin

// set the value of the coin first
do {
  coin = Math.round(Math.random())
  console.log(coin)
}
while (coin) // loop until coin = 0

