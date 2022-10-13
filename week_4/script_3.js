
let cartInfo = [];

function calculateCartTotal(productTotal) {
    const shippingFee = 15;
    const discount = productTotal * 0.05;
    let cartTotal
    // Apply Discount && no shipping fee
    if(productTotal >= 100) {
        cartTotal = productTotal - discount;
    } 
    // Do not apply discout but no shipping fee
    else if (productTotal >= 50) {
        cartTotal = productTotal;
    } else {
        // No discount and No Shipping
        // Print a Message to the customer to increase their Total 
        cartTotal = productTotal + shippingFee;
    }

    // return cartTotal;
    // return `cart total is : ${cartTotal}`;
    return [
        productTotal,
        cartTotal
    ]
}

function informUser(ProductTotal, cartTotal) {
    console.log(`Your Product Total is: ${ProductTotal}`);
    console.log(`Your Cart Total is: ${cartTotal}`);
}

cartInfo = calculateCartTotal(120);
informUser(cartInfo[0], cartInfo[1]);

cartInfo = calculateCartTotal(70);
informUser(cartInfo[0], cartInfo[1]);

cartInfo = calculateCartTotal(20);
informUser(cartInfo[0], cartInfo[1]);

cartInfo = calculateCartTotal(50);
informUser(cartInfo[0], cartInfo[1]);

