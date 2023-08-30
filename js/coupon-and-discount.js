document.addEventListener("DOMContentLoaded", () => {
    const totalAmountElement = document.getElementById('total-amount');
    const totalElement = document.getElementById('total');
    const discountElement = document.getElementById('discount');
    const orderedList = document.getElementById("ordered-product-list");
    const makePurchaseBtn = document.getElementById('btn-make-purchase');
    const applyButton = document.getElementById('btn-apply');
    const couponInput = document.getElementById('coupon-id');
    const couponCode = 'SELL200';
    const discountPercent = 0.20; // 20% discount
    let totalAmount = 0.00;
    let productCount = 0;
  
    // Attach click event listeners to each btn-card
    const btnCards = document.querySelectorAll(".btn-card");
    btnCards.forEach((btnCard) => {
      btnCard.addEventListener("click", () => {
        const productNameElement = btnCard.querySelector(".product-name");
        const productName = productNameElement.textContent;
        const productPriceElement = btnCard.querySelector(".product-price");
        const productPrice = parseFloat(productPriceElement.textContent);
  
        totalAmount += productPrice;
        totalAmountElement.innerText = totalAmount.toFixed(2);
        totalElement.innerText = totalAmount.toFixed(2);
  
        // Enable Make Purchase button and Apply button if total is greater than 200

        if (totalAmount > 0)
        {makePurchaseBtn.removeAttribute('disabled');
        makePurchaseBtn.style.backgroundColor = '#E527B2';
        makePurchaseBtn.style.color = 'white';}

        else {
            makePurchaseBtn.setAttribute('disabled', true);
            makePurchaseBtn.style.backgroundColor = '#fcd9f3';
            makePurchaseBtn.style.color = 'black';}
        if (couponInput===couponCode && totalAmount >= 200) {
          applyButton.removeAttribute('disabled');
          applyButton.style.backgroundColor = '#E527B2';
          applyButton.style.color = 'white';
        } else {
          applyButton.setAttribute('disabled', true);
          applyButton.style.backgroundColor = '#fcd9f3';
          applyButton.style.color = 'black';
        }
  
        // Add the product name to the ordered list
        productCount++;
        const listItem = document.createElement("li");
        listItem.textContent = `${productCount}. ${productName}`;
        orderedList.appendChild(listItem);
      });
    });
  
    // Apply button event listener for discount
    applyButton.addEventListener('click', () => {
      if (couponInput.value === couponCode) {
        const discountedAmount = totalAmount * discountPercent;
        const discountedTotal = totalAmount - discountedAmount;
  
        totalElement.innerText = discountedTotal.toFixed(2);
        totalAmountElement.innerText = discountedTotal.toFixed(2);
        discountElement.innerText = discountedAmount.toFixed(2);
      }
    });
  
    // Coupon input event listener
    couponInput.addEventListener('keyup', function () {
      if (couponInput.value === couponCode && totalAmount >= 200) {
        applyButton.removeAttribute('disabled');
        applyButton.style.backgroundColor = '#E527B2';
        applyButton.style.color = 'white';
      } else {
        applyButton.setAttribute('disabled', true);
        applyButton.style.backgroundColor = '#fcd9f3';
        applyButton.style.color = 'black';
      }
    });

 
    
      const purchaseModal = document.getElementById('purchase-modal');
      const confirmPurchaseBtn = document.getElementById('confirm-purchase');
      const cancelPurchaseBtn = document.getElementById('cancel-purchase');
    
      // Show the modal when Make Purchase button is clicked
      makePurchaseBtn.addEventListener('click', () => {
        purchaseModal.showModal();
      });
    
      // Hide the modal when Cancel button is clicked
      cancelPurchaseBtn.addEventListener('click', () => {
        purchaseModal.close();
      });
    
      // Handle confirmed purchase
      confirmPurchaseBtn.addEventListener('click', () => {
        // Perform actions you want to do when the purchase is confirmed
        // For example: display a success message, reset the cart, etc.
    
        // After handling the purchase, you can close the modal
        purchaseModal.close();
      });
    });
    

  