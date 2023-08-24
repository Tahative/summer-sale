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
// adding product names 




  // Get the ordered list element
  const orderedList = document.getElementById("ordered-product-list");

  // Function to add selected product name to the ordered list
  function addProductToList(productName) {
    const listItem = document.createElement("li");
    listItem.textContent = productName;
    orderedList.appendChild(listItem);
    // orderedList.innerText = "";
  }

  // Attach click event listeners to each btn-card
  const btnCards = document.querySelectorAll(".btn-card");
  btnCards.forEach((btnCard, index) => {
    btnCard.addEventListener("click", () => {
      // Replace "product-name" with the actual class of the product name element
      const productNameElement = btnCard.querySelector(".product-name");
      const productName = productNameElement.textContent;
      addProductToList(`${index+1}. ${productName}`);


        
   } ) 

    })
 
 

