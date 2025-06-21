// Preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById('loader-wrap');
  const content = document.getElementById('main-content');
  const text = document.getElementById('loader-text');

  preloader.style.opacity = 1;

  setTimeout(function () {
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = 0;

    setTimeout(function () {
      preloader.style.display = 'none';
      content.style.display = 'block';

    });
  }, 3000);
});

//Navbar 

//Particle JS

particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 300,
        "density": {
          "enable": true,
          "value_area": 200
        }
      },
      "color": {
        "value": "#fc5b1c"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#ff0000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 100,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 100,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "direction": "bottom",
        "enable": true,
        "speed": 10,  // Higher speed = stronger gravity feel
        "random": false,
        "straight": true,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "remove"
        },
        "resize": false
      },
      "modes": {
        "grab": {
          "distance": 1000,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 299,
          "size": 10,
          "duration": 4,
          "opacity": 10,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


// Initialize Swiper

const swiper = new Swiper('.skills', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,

  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  mousewheel: true,

});

// Initialize Slick Slider

$('.slider').slick({
  infinite: true,
  speed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 0,
});

// Scroll to top button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Text typing effect
const text = document.querySelector('.word');

const phrases = () => {
  setTimeout(() => {
    text.textContent = ' DESIGNER ';
  }, 0);
  setTimeout(() => {
    text.textContent = ' DEVELOPER ';
  }, 3000);
}

phrases();
setInterval(() => {
  phrases();
}, 6000);

//Dark Mode toggle
const toggleBtn = document.getElementById('darkModeToggle');
const modeIcon = document.getElementById('modeIcon');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');
  modeIcon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
});

// Always start in light mode (no localStorage)
window.onload = () => {
  document.body.classList.remove('dark-mode');
  modeIcon.className = 'fas fa-sun';
};

//Increasing numbers

const num = document.querySelectorAll('.num');
let interval = 4000;

console.log(num + "🟢");

num.forEach((num) => {
  let startVal = 0;
  let endVal = parseInt(num.getAttribute('data-val'));

  let duration = Math.floor(interval / endVal);
  let counter = setInterval(() => {
    startVal += 1;
    num.textContent = startVal + "+";

    if (startVal === endVal) {
      clearInterval(counter);
    }
  }, duration);
});