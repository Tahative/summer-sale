// coupon-function

document.getElementById('coupon-id').addEventListener(
    'keyup', function (event) {
        const text = event.target.value;
        const applyButton = document.getElementById('btn-apply');
        const couponCode = 'SELL200';

        if (text === couponCode) {
            applyButton.removeAttribute('disabled');
            applyButton.style.backgroundColor = '#E527B2';
            applyButton.style.color = 'white';
        } else {
            applyButton.setAttribute('disabled', true);
            applyButton.style.backgroundColor = '#fcd9f3';
            applyButton.style.color = 'black';
        }
    }
);
// Get all the elements with the class name "btn-card"
const btnCards = document.querySelectorAll('.btn-card');

// Get the <ol> element where you want to add the list items
const productContainer = document.getElementById('add-item-name');

// Counter to keep track of the list item number
let listItemNumber = 1;

// Attach click event listeners to each "btn-card" element
btnCards.forEach(function(btnCard) {
  btnCard.addEventListener('click', function() {
    // Get the product name from the card
    const productName = btnCard.querySelector('.product-name').textContent;

    // Create a new <li> element with the product name and number
    const li = document.createElement('li');
    li.textContent = `${listItemNumber}. ${productName}`;

    // Append the new <li> element to the <ol> container
    productContainer.appendChild(li);

    // Increment the list item number for the next click
    listItemNumber+;
  });
});

// //   // Add an event listener to the "Make Purchase" button
// //   const makePurchaseButton = document.querySelector('#btn-make-purchase');
// //   makePurchaseButton.addEventListener('click', updateTotalPrice);

//   // Function to calculate and update the total price
//   function updateTotalPrice() {
//     // Get all the added item names and their prices
//     const addedItems = document.querySelectorAll('.added-item');
//     let totalAmount = 0;

//     // Calculate the total price
//     addedItems.forEach((item) => {
//       const price = parseFloat(item.getAttribute('data-price'));
//       totalAmount += price;
//     });

//     // Update the total price span
//     const totalAmountSpan = document.getElementById('total-amount');
//     totalAmountSpan.textContent = totalAmount.toFixed(2);

//     // Update the "Make Purchase" button text
//     makePurchaseButton.textContent = `Make Purchase - ${totalAmount.toFixed(2)} TK`;
//   }





// Attach click event listeners to each "btn-card" element
btnCards.forEach(function(btnCard) {
  btnCard.addEventListener('click', function() {
    // Get the product name and price from the card
    const productName = btnCard.querySelector('.product-name').textContent;
    const productPrice = parseFloat(btnCard.querySelector('.product-price').textContent);

    // Create a new <li> element with the product name and number
    const li = document.createElement('li');
    li.textContent = `${listItemNumber}. ${productName} - ${productPrice.toFixed(2)} TK`;

    // Set the data-price attribute to the <li> element for price calculation
    li.setAttribute('data-price', productPrice);

    // Append the new <li> element to the <ol> container
    productContainer.appendChild(li);

    // Increment the list item number for the next click
    listItemNumber++;

    // Update the total price after adding an item
    updateTotalPrice();
  });
});


// Function to calculate and update the total price
function updateTotalPrice() {
  // Get all the added item names and their prices
  const addedItems = document.querySelectorAll('.added-item');
  let totalAmount = 0;

  // Calculate the total price
  addedItems.forEach((item) => {
    const price = parseFloat(item.getAttribute('data-price'));
    totalAmount += price;
  });

  // Update the total price span
  const totalAmountSpan = document.getElementById('total-amount');
  totalAmountSpan.textContent = totalAmount.toFixed(2);

  // Apply coupon discount if applied
  const discount = parseFloat(document.getElementById('discount').textContent);
  const discountedTotal = totalAmount - discount;
  
  // Update the total span with the discounted total
  const totalSpan = document.getElementById('total');
  totalSpan.textContent = discountedTotal.toFixed(2);

  // Update the "Make Purchase" button text
  makePurchaseButton.textContent = `Make Purchase - ${discountedTotal.toFixed(2)} TK`;
}
