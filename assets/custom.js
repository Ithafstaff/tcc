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


const productCards = document.querySelectorAll('.custom-product-list .custom-product-item');

productCards.forEach((card, index) => {
  console.log(`Product ${index + 1}:`, card);

  // Example: get the handle
  const handle = card.getAttribute('handle');
  console.log('Handle:', handle);

  // Example: get the product title
  const titleElement = card.querySelector('.product-card__title a');
  const title = titleElement ? titleElement.textContent.trim() : 'No title found';
  console.log('Title:', title);

  // Example: get image URL
  const img = card.querySelector('img');
  const imgUrl = img ? img.getAttribute('src') : 'No image found';
  console.log('Image URL:', imgUrl);

  // Do something with each card...
});
