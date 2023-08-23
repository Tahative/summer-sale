
// Function to update card selection and calculate total
function updateCart(productName, productPrice) {
    const cartSection = document.getElementById('cart-section');
    const cardNameElement = document.getElementById('card-name');
    const totalElement = document.getElementById('total-amount');

    cardNameElement.textContent = productName;
    
    // Calculate total price with discount
    const total = parseFloat(totalElement.dataset.originalTotal) - (parseFloat(productPrice) * 0.2);
    totalElement.textContent = total.toFixed(2) + ' TK';

    cartSection.style.display = 'block';
}


// Attach click event to card buttons
const cardDiv = document.querySelectorAll('.btn-card');
cardDiv.forEach(div => {
    div.addEventListener('click', function () {
        const cardName = productName.dataset.cardName;
        const cardPrice = productPrice.dataset.cardPrice;
        updateCart(cardName, cardPrice);
    });
});







