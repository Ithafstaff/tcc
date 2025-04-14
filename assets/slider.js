/**
 * Initialization and options for Splide js
 */

function splider() {

    
  // ---for real girls slider section ---
    const productSlider1 = document.querySelector('.js-collection-slider');
    if (productSlider1) {

     new Splide(productSlider1, {
      type       : 'loop',
      // height     : '200px',
      perPage    : 6,
      perMove    : 1,
       gap: 50,
      breakpoints: {
        640: {
          height: '6rem',
        },
      },
    }).mount();
      
    }



  
}
splider();