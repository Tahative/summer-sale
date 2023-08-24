


// Attach click event to card buttons
const cardDiv = document.querySelectorAll('.btn-card');
cardDiv.forEach(div => {
    div.addEventListener('click', function () {
        const cardName = productName.dataset.cardName;
        const cardPrice = productPrice.dataset.cardPrice;
        updateCart(cardName, cardPrice);
    });
});







