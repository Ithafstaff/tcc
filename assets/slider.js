/**
 * Initialization and options for Splide js
 */

function splider() {

    
 new Splide('.splide', {
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
splider();