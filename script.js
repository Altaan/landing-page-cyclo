const slider = document.querySelector(".slider");
const hero = document.querySelector(".hero");
const heroText = document.querySelector(".hero__text");

// Using TimelineMax to create timeline animation
const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "100%" },
    { width: "80%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(heroText, 0.5, { opacity: 0, x: 50 }, { opacity: 1, x: 0 }, "-=0.5");

// showing the nav-links when the burger is clicked on
const navSlide = () => {
  const burger = document.querySelector(".nav__burger");
  const navLinks = document.querySelector(".nav__links");
  const navLinksItems = document.querySelectorAll(".nav__links li");

  burger.addEventListener("click", () => {
    // Toggle nav
    navLinks.classList.toggle("nav__links--active");

    // Animate links
    navLinksItems.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 5 + 0.4
        }s`;
      }
    });

    // Burger animation
    burger.classList.toggle("nav__burger--toggle");
  });
};

navSlide();

// Used to loop through the logo letters to get their total length
// const logoLetters = document.querySelectorAll(".logo path");

// for (let i = 0; i < logoLetters.length; i++) {
//   console.log(`Letter ${i} is ${logoLetters[i].getTotalLength()}`);
// }
