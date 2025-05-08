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
  const MEDIA_CLASS = 'custom-product__gallery-media';
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
      const allThumbs = Array.from(document.querySelectorAll('.' + THUMB_CLASS));
      const index = allThumbs.indexOf(el); // 0-based index

      // Remove border from all
      allThumbs.forEach(node => node.classList.remove(ACTIVE_CLASS));

      // Add border to current
      el.classList.add(ACTIVE_CLASS);

      // Get corresponding media element based on index
      const mediaList = document.querySelectorAll('.' + MEDIA_CLASS);
      const targetMedia = mediaList[index+1];

      if (targetMedia) {
        const img = targetMedia.querySelector('img');
        if (img && img.src) {
          console.log(`Hovered image src: ${img.src}`);
          console.log('index: ' + (index+1));
          
          let isSelected = document.querySelectorAll('.' + MEDIA_CLASS + '.is-selected img');
          isSelected.src = img.src;

          
        } else {
          console.log(`No image found in media item ${index + 1}`);
        }
      } else {
        console.log(`No media item at position ${index + 1}`);
      }
    });

    el.dataset.thumbBound = 'true';
  }

  // Attach listeners to existing thumbs
  document.querySelectorAll('.' + THUMB_CLASS).forEach(attachHover);

  // Watch for dynamically added thumbs
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



