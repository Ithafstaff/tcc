/**
 * Initialization and options for Splide js
 */

function splider() {

    
  // ---for real girls slider section ---
    const productSlider1 = document.querySelector('.js-collection-slider');
    if (productSlider1) {

     new Splide(productSlider1, {
      type       : 'loop',
      height     : '9rem',
      perPage    : 2,
      breakpoints: {
        640: {
          height: '6rem',
        },
      },
    }).mount();
      
    }



  
}
splider();