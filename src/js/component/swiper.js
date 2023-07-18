
const swiper = new Swiper('#swiper2', {
    direction: 'horizontal',
    slidesPerView: 4,
    slidesPerGroup: 2,
    loop:true,
    spaceBetween: 35,
    autoplay: {
        delay: 3600,
      },
 
    effect: 'slide',
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

     observer: true

  });
  const swiperTest = new Swiper('.test__swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop:true,
    spaceBetween: 39,

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  
