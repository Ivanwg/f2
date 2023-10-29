import Swiper from "swiper";
import { Pagination, Autoplay, FreeMode, Navigation } from 'swiper/modules';

function waitDom() {
  return new Promise(resolve => {
    window.addEventListener('DOMContentLoaded', e => {
      resolve();
    });
  })
}


waitDom().then(res => {
  const swiper = new Swiper('#js-beauty-slider', {
    modules: [Pagination, Navigation],
    spaceBetween: 24,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<button class="indicator ' + className + '"></button>';
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      // prevEl: '.swiper-button-prev',
    },
  });

  const offersSwiper = new Swiper('.js-offers-slider', {
    modules: [Pagination, Navigation, FreeMode],
    spaceBetween: 10,
    // slidesPerView: 3.8,
    slidesPerView: 'auto',
    freeMode: true,
  });
});