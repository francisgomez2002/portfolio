particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 90,
        "density": {
          "enable": true,
          "value_area": 200
        }
      },
      "color": {
        "value": ["#43b0f1", "#057dcd"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#00008B"
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
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 400,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 10,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
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
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,

  autoplay: {
    delay: 1000,
    disableOnInteraction: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // on: {
  //   autoplayTimeLeft(s, time, progress) {
  //     progressCircle.style.setProperty("--progress", 1 - progress);
  //     progressContent.textContent = `${Math.ceil(time / 1000)}s`;
  //   }
  // },

  // Responsive breakpoints
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

  // And if we need scrollbar

  mousewheel: true,

});

// Initialize Slick Slider

$('.slider').slick({
  infinite: true,
  speed: 950,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 0,
  centerMode: true,
  centerPadding: '60px',
});

//Progress bar

const progressBars = document.querySelectorAll('.circular-bar');
progressBars.forEach((bar) => {
  const valueDisplay = bar.querySelector('.progress-percent');
  let startValue = 0;
  const endValue = parseInt(bar.getAttribute('data-percent')) || 0;
  const speed = 50;

  const progress = setInterval(() => {
    if (startValue >= endValue) {
      clearInterval(progress);
      return;
    }

    startValue++;
    if (valueDisplay) {
      valueDisplay.textContent = `${startValue}%`;
    }

    bar.style.background = `conic-gradient( #aea0fc ${startValue * 0.5}deg, #4797ff ${startValue * 1}deg, #6DCFF6 ${startValue * 1.5}deg, #b2faa3 ${startValue * 2}deg, #fbff82 ${startValue * 2.5}deg, #ffbc6a ${startValue * 3}deg, #ff677d ${startValue * 3.5}deg, #ddd ${startValue * 3.6}deg)`;
  }, speed);
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
    text.textContent = ' DEVELOPER';
  }, 0);
  setTimeout(() => {
    text.textContent = ' DESIGNER';
  }, 4000);
}

phrases();
setInterval(() => {
  phrases();
}, 8000);

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



