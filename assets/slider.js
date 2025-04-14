/**
 * Initialization and options for Splide js
 */

function splider() {

  // ---for press-logo Slider---
  const pressLogoTop = document.querySelector('.press-logo-top');
  const pressLogoThumb = document.querySelector('.press-logo-slide')

  if (pressLogoTop && pressLogoThumb) {
    const pressLogoMain = new Splide(pressLogoTop, {
      type: 'fade',
      rewind: false,
      pagination: false,
      arrows: false,
    });

    const pressLogoSlide = new Splide(pressLogoThumb, {
      type: 'loop',
      autoWidth: true,
      drag: false,
      focus: 'center',
      gap: 50,
      autoplay: true,
      updateOnMove: true,
      pagination: false,
      breakpoints: {
        767: {
          fixedHeight: '40px',
          gap: 30,
          autoScroll: {
            speed: 0.4,
          }
        },
      }
    });
    pressLogoMain.sync(pressLogoSlide);
    pressLogoMain.mount();
    pressLogoSlide.mount();
  }


  // ---for product Slider---
  const productSlideMain = document.querySelector('.product-slide-main')
  const productSlideThumb = document.querySelector('.product-slide-thumb');

  if (productSlideMain && productSlideThumb) {
    const thumbElements = document.querySelectorAll('.slider__thumb');
    const thumbCount = thumbElements.length;

    if (thumbCount <= 5) {
      const main = new Splide(productSlideMain, {
        type: 'slide',
        heightRatio: 0.5,
        pagination: false,
        arrows: false,
        cover: true,
        drag: false,
      });

      const autoSlide = new Splide(productSlideThumb, {
        type: 'slide',
        rewind: false,
        width: '150px',
        height: '680px',
        gap: 10,
        pagination: false,
        cover: true,
        updateOnMove: true,
        wheel: true,
        direction: 'ttb',
        drag: false,
        isNavigation: true,
        arrows: false,
        dragMinThreshold: {
          mouse: 4,
          touch: 10,
        },
        breakpoints: {
          1340: {
            width: '120px',
          },
          767: {
            direction: 'ltr',
            fixedWidth: 66,
            fixedHeight: 38,
          },
        },
      });
      main.sync(autoSlide);
      main.mount();
      autoSlide.mount();
    }
    else {
      const main = new Splide(productSlideMain, {
        type: 'loop',
        heightRatio: 0.5,
        pagination: false,
        arrows: false,
        cover: true,
        drag: false,
      });

      const autoSlide = new Splide(productSlideThumb, {
        type: 'loop',
        rewind: true,
        width: '150px',
        height: '680px',
        gap: 10,
        pagination: false,
        cover: true,
        updateOnMove: true,
        wheel: true,
        direction: 'ttb',
        drag: false,
        isNavigation: true,
        dragMinThreshold: {
          mouse: 4,
          touch: 10,
        },
        breakpoints: {
          1340: {
            width: '120px',
          },
          767: {
            direction: 'ltr',
            fixedWidth: 66,
            fixedHeight: 38,
          },
        },
      });
      main.sync(autoSlide);
      main.mount();
      autoSlide.mount();
    }
  }

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

  // ---for compatible with slider section ---
    const productSlider2 = document.querySelector('.product__compatible-with-slider');
    if (productSlider2) {

      const sectionSlider2 = new Splide(productSlider2, {
        type   : 'loop',
        perPage: 1,
        perMove: 1,
        pagination: false,
        autoplay: true,
        updateOnMove: true,
        gap: 24,
         breakpoints: {
          980: {
             perPage: 1,
          },
          767: {
             perPage: 1,
          }
         }
      });
      sectionSlider2.mount();
    }

  // ---for product-result with slider section ---
    const productSlider3 = document.querySelector('.product__product-result-slider');
    if (productSlider3) {

      const sectionSlider3 = new Splide(productSlider3, {
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

      sectionSlider3.mount();
    }

   // ---for custom video slider section ---
    const videoSlider = document.querySelector('.custom__slide-vid');
    if (videoSlider) {

      const customVideoSlide = new Splide(videoSlider, {
      type: 'video',
        video: {
          loop: true,
        },
      });
      customVideoSlide.mount();
    }

     // ---for custom review slider section ---
    const reviewSlider = document.querySelector('.reviewsplide');
    if (reviewSlider) {
      const customReviewSlide = new Splide(reviewSlider, {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: 30,
        pagination: false,
        autoplay: true,
        breakpoints: {
        767: {
            type: 'loop',
            autoplay: true,
            perPage: 1,
            perMove: 1,
            rewind: true,
            focus  : 'center',
            gap: 20,
          },
        }
      });
      customReviewSlide.mount();
    }

     // ---for custom Hollywood best kept secret ---
    const secretSlider = document.querySelector('.product__best-kept-slider');
    if (secretSlider) {
      const customSecretSlide = new Splide(secretSlider, {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        pagination: false,
        gap: 20,
        autoplay: true,
        breakpoints: {
          980: {
            gap: 10,
            perPage: 2,
          },
          767: {
            perPage: 1,
          },
        }
      });
      customSecretSlide.mount();
    }

    // ---for custom Which BOOMBA Insert is best for you? slider section ---
    const bestSlider = document.querySelector('.best-for-you-slider');
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