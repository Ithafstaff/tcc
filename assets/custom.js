//script for rendering product price
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





//script for product carousel image when hovering
(function () {
  const THUMB_CLASS = 'custom-product__gallery-thumbnail';
  const MEDIA_CLASS = 'custom-product__gallery-media';
  const ACTIVE_CLASS = 'thumb--hovered';
  const BORDER_STYLE = '1px solid transparent';

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
          
         let selectedMedia = document.querySelector('.' + MEDIA_CLASS + '.is-selected');
      
          if (selectedMedia) {
            let selectedImg = selectedMedia.querySelector('img');
            if (selectedImg) {
              selectedImg.src = img.src;
              selectedImg.srcset = img.src;
            }
          }

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





//script for closing filter tabs when first load in Collections Filter
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.accordion').forEach((el) => {
    el.removeAttribute('open');
  });
});



//script for closing filter tabs when first load in Collections Filter
document.addEventListener('DOMContentLoaded', function () {
  // Add the "open" attribute dynamically
  document.querySelector('.custom-product-info__block-item:first-child .accordion').setAttribute('open', '');

});



//script for showing only the product variant images 
// document.querySelectorAll('.variant-picker__option-values.Color input').forEach(input => {
//   input.addEventListener('change', function () {
//     const selectedColor = this.value.toLowerCase();
//     console.log('Selected color:', selectedColor);

//     document.querySelectorAll('.custom-product__gallery-thumbnail').forEach(media => {
//       const img = media.querySelector('img');
//       const altText = img?.alt?.toLowerCase() || '';

//       media.style.display = altText.includes(selectedColor) ? 'block' : 'none';
//     });
//   });
// });

function showOnlyVariantImage() {
  const colorOptionsContainer = document.querySelectorAll('.variant-picker__option-values.Color .sr-only span.srs');
  console.log(colorOptionsContainer);
}
showOnlyVariantImage();



// colorOptionsContainer.addEventListener('change', (event) => {
//   // Check if the event target is an input (optional check)
//   if (event.target && event.target.matches('input')) {
//     const checkedInput = colorOptionsContainer.querySelector('input:checked');

//     if (checkedInput) {
//       const label = document.querySelector(`label[for="${checkedInput.id}"]`);
//       const span = label?.querySelector('span');

//       console.log('Value:', checkedInput.value);
//       console.log('Text:', span?.textContent.trim());
//     }
//   }
// });


