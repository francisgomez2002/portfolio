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

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 600,
      "density": {
        "enable": true,
        "value_area": 100
      }
    },
    "color": {
      "value": "#fc5b1c"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 1
    },
    "size": {
      "value": 5,
      "random": true
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffc107",
      "opacity": 0.5,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "bottom",
      "out_mode": "out"
    }
  },
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

  initParticles(isDark ? "#ffffff" : "#fc5b1c");
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