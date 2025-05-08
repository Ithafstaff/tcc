// this script is for rendering product price
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


// this script is for product carousel image when hovering



(function () {
  const THUMB_CLASS = 'custom-product__gallery-thumbnail';
  const ACTIVE_CLASS = 'thumb--hovered';
  const BORDER_STYLE = '1px solid #000';

  const style = document.createElement('style');
  style.textContent = `
    .${ACTIVE_CLASS} { border: ${BORDER_STYLE}; }
  `;
  document.head.appendChild(style);

  function attachHover(el) {
    if (el.dataset.thumbBound) return;

    el.addEventListener('mouseenter', () => {
      // Get all current thumbnails
      const allThumbs = Array.from(document.querySelectorAll('.' + THUMB_CLASS));

      // Find the index of the hovered element
      const index = allThumbs.indexOf(el);

      // Clear previous border class
      allThumbs.forEach(node => node.classList.remove(ACTIVE_CLASS));

      // Add border to current
      el.classList.add(ACTIVE_CLASS);

      // Log the 1-based index (e.g., 5 for fifth thumbnail)
      console.log(`Hovered thumbnail number: ${index + 1}`);
    });

    el.dataset.thumbBound = 'true';
  }

  // Bind all current thumbnails
  document.querySelectorAll('.' + THUMB_CLASS).forEach(attachHover);

  // Handle dynamically added thumbnails
  const observer = new MutationObserver(mutations => {
    for (const m of mutations) {
      m.addedNodes.forEach(node => {
        if (node.nodeType === 1 && node.classList.contains(THUMB_CLASS)) {
          attachHover(node);
        }
        node.querySelectorAll?.('.' + THUMB_CLASS).forEach(attachHover);
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();


