/**
 * Initialization and options for Splide js
 */



    
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



