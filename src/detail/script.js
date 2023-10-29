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
  const swiper = new Swiper('.js-similar-slider', {
    modules: [Pagination, Navigation],
    spaceBetween: 30,
    slidesPerView: 'auto',

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const input = document.querySelector('.js-number-input');

  const minus = input.parentNode.querySelector('.js-number-input-minus');
  const plus = input.parentNode.querySelector('.js-number-input-plus');
  minus.onclick = e => {
    if (Number(input.value) < 2) return;
    input.value = `${Number(input.value) - 1}`;
  }
  plus.onclick = e => {
    input.value = `${Number(input.value) + 1}`;
  }
});