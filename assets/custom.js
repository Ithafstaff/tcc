document.addEventListener('DOMContentLoaded', function () {
  const renderPrice = document.getElementById('renderPrice');

  // Function to update the price dynamically
  function updatePrice() {
    const selectedVariant = window.product && window.product.selectedVariant;
    if (selectedVariant) {
      const productPrice = selectedVariant.price / 100; // Price in cents
      renderPrice.innerText = `$${productPrice.toFixed(2)}`;
    }
  }

  // Example event listener for a variant change (assuming variant select element exists)
  const variantSelector = document.querySelector('select[name="id"]');
  if (variantSelector) {
    variantSelector.addEventListener('change', updatePrice);
  }

  // Initial price display
  updatePrice();
});


// Select all product cards with the class `custom-product-item`
const productCards = document.querySelectorAll('.product-list .custom-product-item');

productCards.forEach((card, index) => {
  // Accessing the "handle" attribute from the <product-card>
  const handle = card.getAttribute('handle');

  // You can also access other elements inside the card
  const title = card.querySelector('.product-card__title a')?.textContent.trim();
  const imageSrc = card.querySelector('img')?.getAttribute('src');

  // Do something with the data
  console.log(`Card ${index + 1}:`);
  console.log('Handle:', handle);
  console.log('Title:', title);
  console.log('Image Source:', imageSrc);

  // Example: you can simulate a "tap" by clicking the anchor
  // card.querySelector('a')?.click();
});
