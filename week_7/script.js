// const obj = {} 

// key value pair in an objec 
// key: value 
const car = { 
    year: 2019,
    make: 'Toyota',
    model: 'Prius',

    // bad practice
    "car model" : "new model"
  }
   
  // dot notation
  // obj.prop
  console.log(car.make) // 'Toyota'
// car.make or car["make"]
//car.car model 
car["car model"]
// dot notation
car.make = 'Tesla'

console.log(car.make) // 'Tesla'

  
  // bracket notation
  console.log(car['model']) // 'Prius'

  // bracket notation
car['model'] = 'Model 3'

console.log(car['model']) // 'Model 3'

  
  const car2 = { 
    year: 2019,
    make: 'Toyota',
    model: 'Prius',
    features: [
      'Hybrid',
      'Remote Keyless Entry', 
      'Anti-Lock Brakes', 
      'Stability Control',
      'GPS Navigation'
    ]
  }
  //Features  
  console.log(car2.features) // Array of Features

  //Sub propery2
  console.log(car2.features[2]) // 'Anti-Lock Brakes'

  // dot notation
  car2.color = 'Red'

// bracket notation
car2['range'] = 500

console.log(car2.color) // Red
console.log(car2.range) // 500

// delete a properly 
delete car2.range

console.log(car2.range) // 500


// bracket notation
delete car2['features']
console.log(car2.features) // Array of Features

//
const object = {
    value: 42,
    greet: function(name) {
      console.log('Hello! ' + name)
    },
    displayValue: function() {
      console.log(this.value)
    }
  }
  
  object.greet('Winner')
  object.displayValue()
  

  const person = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'jsmith@email.com'
  }
  
  const keys = Object.keys(person)
  console.log(keys) // ['firstName', 'lastName', 'email']
  
  const values = Object.values(person)
console.log(values) // ['John', 'Smith', 'jsmith@email.com']

const entries = Object.entries(person)
console.log(entries) 
// [['firstName', 'John'], ['lastName', 'Smith'], ['email', 'jsmith@email.com']]

let containerHTML = "";
containerHTML += `<p>First Name : ${person.firstName}</p>`
containerHTML += `<p>Last Name : ${person.lastName}</p>`
containerHTML += `<p>email : <a href="mailto:${person.email}">${person.email}</a></p>`


document.getElementById('container').innerHTML = containerHTML;

const car3 = {
    make: 'Toyota',
    year: 2019,
    model: 'Prius',
}

car3['range'] = 500
car3.color = "blue"



const carKeys = Object.keys(car3)
console.log(carKeys);
let container2HtmlArr = [];

carKeys.forEach(key => {
    console.log(key);
    console.log(car3[key])
    container2HtmlArr.push(`<p>${key} : ${car3[key]}</p>`)
});
console.log(container2HtmlArr);

document.getElementById('container-2').innerHTML = container2HtmlArr.join('');