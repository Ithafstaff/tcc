/**
 * Initialization and options for Splide js
 */

function splider() {

    
  // ---for real girls slider section ---
    const productSlider1 = document.querySelector('.product__real-girls-slider');
    if (productSlider1) {

      const sectionSlider1 = new Splide(productSlider1, {
        type: 'loop',
        drag: false,
        focus: 'center',
        rewind: true,
        gap: 50,
        autoplay: true,
        updateOnMove: true,
        pagination: false,
        perPage: 1,
      });

      sectionSlider1.mount();
      
    }



  
}
splider();