/**
 * Initialization and options for Splide js
 */

function splider() {



    
    const bestSlider = document.querySelector('.js-collection-slider');
    if (bestSlider) {
      const customBestSlide = new Splide(bestSlider, {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: 60,
        pagination: false,
        breakpoints: {
        767: {
            autoplay: true,
            perPage: 1,
            perMove: 1,
            rewind: true,
            padding: '4rem',
            focus  : 'center',
            gap: 20,
          },
        }
      });
      customBestSlide.mount();
    }
}
splider();