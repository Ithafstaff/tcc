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



document.querySelectorAll('.product-card__title').forEach(el => {
  el.classList.forEach(cls => {
    el.classList.replace(cls, `${cls}-test`);
  });
});
