/*-----------scroll section active----------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset +height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    };

  });

/*-----------encabezado navbar----------------*/
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);
/*-----------activar menu----------------*/


menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


};

/*-----------slider----------------*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*-----------menu----------------*/

  let menuIcon = document.querySelector('#menu');
  let navbar = document.querySelector('.navbar');
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }

  /*-----------modo dia y noche----------------*/

  let darkModeIcon = document.querySelector('#darkMode-icon');

  darkModeIcon.onclick =() => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
  }

   /*-----------animaciones----------------*/
  ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 1000,
    delay: 100
});

ScrollReveal().reveal('.inicio-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.inicio-img img, .archiver-container, .imagen-port, .monito-wrapper', { origin: 'bottom' });
ScrollReveal().reveal('.inicio-content h1, .ocoyucan-img img', { origin: 'left' });
ScrollReveal().reveal('.inicio-content h2, .inicio-content p, .ocoyucan-content', { origin: 'right' });