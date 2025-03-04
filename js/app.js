document.addEventListener("DOMContentLoaded", () => {
  const navList = document.getElementById("navbar__list");
  const sections = document.querySelectorAll("section");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  // Build the Navigation Menu
  const buildNav = () => {
    sections.forEach((section) => {
      const sectionID = section.id;
      const sectionData = section.dataset.nav;

      // Create Button for Each Section
      const listItem = document.createElement("li");
      const button = document.createElement("button");

      button.className = "menu__button";
      button.setAttribute("data-target", sectionID);
      button.textContent = sectionData;

      // Append Elements
      listItem.appendChild(button);
      navList.appendChild(listItem);
    });
  };

  buildNav();

  const makeActive = () => {
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const button = document.querySelector(
        `button[data-target="${section.id}"]`
      );

      if (rect.top <= 150 && rect.bottom >= 150) {
        section.classList.add("active");
        button.classList.add("active");
      } else {
        section.classList.remove("active");
        button.classList.remove("active");
      }
    });
  };

  document.addEventListener("scroll", makeActive);

  // Smooth Scroll on Button Click
  navList.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
      event.preventDefault();
      const targetID = event.target.getAttribute("data-target");
      const targetSection = document.getElementById(targetID);
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
