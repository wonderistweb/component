$(function() {
    let $lecturesSwiper = $("[data-swiper=lectures]");
    let slideTotal = $lecturesSwiper.find('.swiper-slide').length;

    // Duplicate slides for seamless loop
    for (let i = 0; i < slideTotal; i++) {
      $lecturesSwiper.find('.swiper-wrapper').append($lecturesSwiper.find('.swiper-slide').eq(i).clone());
    }

    var swiper = new Swiper('[data-swiper=lectures]', {
      speed: 800,
      loop: true,
      loopedSlides: slideTotal,
      navigation: {
        nextEl: '[data-swiper=next-lectures]',
        prevEl: '[data-swiper=prev-lectures]',
      },
      breakpoints: {
        992: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        320: {
          slidesPerView: 'auto',
          spaceBetween: 24,
        },
      }
    });

    function animSlide() {
      $(`.swiper-slide:not(:eq(${swiper.activeIndex}))`).find('[data-lectures=anim]').removeClass('active');
      $(`.swiper-slide:eq(${swiper.activeIndex})`).find('[data-lectures=anim]').addClass('active');
    }

    swiper.on('transitionEnd', function() {
      setTimeout(animSlide, 800);
      $(`.swiper-slide:not(:eq(${swiper.activeIndex}))`).find('[data-lectures=anim2]').removeClass('active');
      $(`.swiper-slide:eq(${swiper.activeIndex})`).find('[data-lectures=anim2]').addClass('active');
    });

  });    
