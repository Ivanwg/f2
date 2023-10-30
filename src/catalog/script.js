import noUiSlider from 'nouislider';
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
  const skipSlider = document.getElementById("skipstep");
  const skipValues = [
    document.getElementById("skip-value-lower"),
    document.getElementById("skip-value-upper")
  ];

  noUiSlider.create(skipSlider, {
    start: [18, 100],
    connect: true,
    behaviour: "drag",
    step: 1,
    range: {
      min: 18,
      max: 100
    },
    format: {
      from: function (value) {
        return parseInt(value);
      },
      to: function (value) {
        return parseInt(value);
      }
    }
  });

  skipSlider.noUiSlider.on("update", function (values, handle) {
    skipValues[handle].innerHTML = `$${values[handle]}`;
  });



});


