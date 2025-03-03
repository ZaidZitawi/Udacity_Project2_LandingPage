document.addEventListener('DOMContentLoaded', () => {
    const navList = document.getElementById('navbar__list');
    const sections = document.querySelectorAll('section');
  
   
     /* Dynamically creates navigation buttons based on the sections in the HTML.*/
    const buildNav = () => {
      sections.forEach(section => {
        const sectionID = section.id;
        const sectionData = section.dataset.nav;
  
        // Create <li> and <button> for each section
        const listItem = document.createElement('li');
        const button = document.createElement('button');
        button.className = 'menu__button';
        button.setAttribute('data-target', sectionID);
        button.textContent = sectionData;
        listItem.appendChild(button);
        navList.appendChild(listItem);
      });
    };
  
    buildNav();
  
    
     /* Checks which section is currently in the viewport and sets it as active,
     highlighting both the section and its corresponding button.*/
    const makeActive = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const button = document.querySelector(`button[data-target="${section.id}"]`);
  
        if (rect.top <= 150 && rect.bottom >= 150) {
          section.classList.add('active');
          button.classList.add('active');
        } else {
          section.classList.remove('active');
          button.classList.remove('active');
        }
      });
    };
  
    
    document.addEventListener('scroll', makeActive);
  
    /*Smooth scrolling when a button is clicked. We look up the target section ID and scroll to it.*/
    navList.addEventListener('click', event => {
      if (event.target.nodeName === 'BUTTON') {
        event.preventDefault(); 
        const targetID = event.target.getAttribute('data-target');
        const targetSection = document.getElementById(targetID);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  