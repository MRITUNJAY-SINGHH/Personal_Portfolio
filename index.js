// * SERVICES TOGGLE
const servicesButtons = document.querySelectorAll('.service__item');
const serviceDetails = document.querySelector('.services__right');
// console.log(servicesButtons);

const getService = (category) => {
   const details = servicesData.find((item) => item.category === category);
   console.log(details);
   serviceDetails.innerHTML = `
      <h3>${details.title}</h3>
      ${details.description
         .map((paragraph) => '<p>' + paragraph + '</p>')
         .join('')}
  `;
};

const removeActiveClass = () => {
   servicesButtons.forEach((button) => {
      button.classList.remove('active');
   });
};

servicesButtons.forEach((item) => {
   item.addEventListener('click', () => {
      removeActiveClass();
      const serviceClass = item.classList[1];
      // console.log(serviceClass);
      getService(serviceClass);
      item.classList.add('active');
   });
});

getService('frontend');

// * MIXITUP - Projects Section
const containerEl = document.querySelector('.projects__container');
var mixer = mixitup(containerEl, {
   animation: {
      enable: false,
   },
});

mixer.filter('*');

// * SWIPER JS - Testimonials Section
const swiper = new Swiper('.swiper', {
   slidesPerView: 1,
   spaceBetween: 10,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   breakpoints: {
      320: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      480: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
      640: {
         slidesPerView: 4,
         spaceBetween: 40,
      },
   },
});

// * NAV TOGGLE
const navMenu = document.querySelector('.nav__menu');
const navOpenBtn = document.querySelector('.nav__toggle-open');
const navCloseBtn = document.querySelector('.nav__toggle-close');

const openNavHandler = () => {
   navMenu.style.display = 'flex';
   navOpenBtn.style.display = 'none';
   navCloseBtn.style.display = 'inline-block';
};

const closeNavHandler = () => {
   navMenu.style.display = 'none';
   navOpenBtn.style.display = 'inline-block';
   navCloseBtn.style.display = 'none';
};

navOpenBtn.addEventListener('click', openNavHandler);
navCloseBtn.addEventListener('click', closeNavHandler);

// * Close Nav Menu on click of nav link on small screens i.e, < 780px
const navItems = navMenu.querySelectorAll('a');

if (window.innerWidth < 768) {
   navItems.forEach((item) => {
      item.addEventListener('click', closeNavHandler);
   });
}

// * DARK & LIGHT THEME TOGGLE FEATURE
const themeBtn = document.querySelector('.nav__theme-btn');

themeBtn.addEventListener('click', () => {
   let bodyClass = document.body.className;
   if (!bodyClass) {
      bodyClass = 'dark';
      document.body.className = bodyClass;
      // * change toggle icon
      themeBtn.innerHTML = '<i class="uil uil-sun"></i>';
      // * save theme to local storage
      window.localStorage.setItem('theme', bodyClass);
   } else {
      bodyClass = '';
      document.body.className = bodyClass;
      // * change toggle icon
      themeBtn.innerHTML = '<i class="uil uil-moon"></i>';
      // * save theme to local storage
      window.localStorage.setItem('theme', bodyClass);
   }
});

// * load theme on page load initially
window.addEventListener('load', () => {
   document.body.className = window.localStorage.getItem('theme');
});
document.getElementById('contactForm').addEventListener('submit', function (e) {
   e.preventDefault(); // Prevent the form from submitting normally

   // Get the form data
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const message = document.getElementById('message').value;

   // Construct the email body
   const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

   // Construct the email URL
   const emailUrl = `mailto:${email}?subject=Contact Form Submission&body=${emailBody}`;

   // Open the user's default email client
   window.location.href = emailUrl;
});

// Check if there is a hash fragment in the URL
if (window.location.hash) {
   // Scroll to the corresponding section
   var targetSection = document.querySelector(window.location.hash);
   if (targetSection) {
      targetSection.scrollIntoView({
         behavior: 'smooth', // Use 'auto' for instant scroll
         block: 'start', // Scroll to the top of the section
      });
   }
}
