/**
 * Initialization and options for Splide js
 */

function splider() {

    
  // ---for custom collection menu slider in collection pages ---
    const productSlider1 = document.querySelector('.js-collection-slider');
    if (productSlider1) {

     new Splide(productSlider1, {
      type       : 'slide',
      // height     : '200px',
      perPage    : 6,
      perMove    : 1,
      gap: 20,
       pagination: false,
      breakpoints: {
        640: {
          // height     : '200px',
        },
      },
    }).mount();
      
    }
  
  // ---for  recently viewed product slider---
    const productSlider2 = document.querySelector('.js-category-slider');
    if (productSlider2) {

     new Splide(productSlider2, {
      type       : 'loop',
      // height     : '200px',
      perPage    : 6,
      perMove    : 1,
       gap: 20,
       pagination: false,
      breakpoints: {
        640: {
          // height: '6rem',
        },
      },
    }).mount();
      
    }



  
}
splider();