
/* 
Imagine you are building a site for an e-commerce shop, and 
you need to apply certain discounts based on the user's produuct 
total. We can use conditional statements to calculate the 
cart total.

Conditions:
  - If the product total is greater than or equal to $50, 
    apply free shipping
*/

/*
Step 1: Define variables
  - productTotal may be reassigned later, so we use the let declaration
  - shippingFee is always the same, so we use the const declaration
*/
let productTotal = 120
const shippingFee = 15
let cartTotal
let discount = 0.05 * productTotal

cartTotal = productTotal + shippingFee

// Step 2: Check if product total >= 50, if so, apply free shipping

// if(productTotal >= 100) {
//     // remove shipping fees AND apply a 5% discount
//     cartTotal = productTotal - discount
//     console.log("Product Total is greater than 100")
//     console.log(cartTotal)
// } else if(productTotal >= 50) {
//      // If product total >= 50, remove shipping fee, and do not apply discount
//      console.log("Product Total is greater than 50 but less than 100")
//     cartTotal = productTotal
//     console.log(cartTotal)
// } else {
//  console.log("Product Total is less than 50")   
//   console.log(cartTotal)
// }

// // Logic A : ProductTotal >= 50
// // Logic B : ProductTotal >= 100
// // Logic C : ProductTotal < 50

// switch(VARIABLE) {
//     case 1 :

//     break

//     case 2 : 

//     break 

//     case 3 : 

//     break
    
//     default:
        
//     break
// }


// switch (true) {
//     case productTotal < 50:
//       // this block of code will execute
//       cartTotal = productTotal + shippingFee
//       console.log('Cart Total is ' + cartTotal)
//       break
//     case productTotal >= 100:
//         // this block of code will NOT execute
//         cartTotal = productTotal - discount
//         console.log('Cart Total is ' + cartTotal)
//     break
//     case productTotal >= 50:
//       // this block of code will NOT execute
//       cartTotal = productTotal
//       console.log('Cart Total is ' + cartTotal)
//       break
//   }

const answer = 'F'

switch(answer)
{
    // if(ansswer === 'A')
  case 'A':
    // This block of code WILL execute
    console.log('A is the correct answer.')
    break
    // if(ansswer === 'B')
  case 'B': 
    // This block of code will NOT execute
    console.log('B is the wrong answer.')
    break
    // if(ansswer === 'C')
  case 'C': 
    // This block of code will NOT execute
    console.log('C is the wrong answer.')
   break 
   default : 
    console.log('Invalid option')
   break 
}
