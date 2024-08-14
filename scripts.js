// REMOVE PAGE LOADER AFTER 5s
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.querySelector('.page-loader').classList.add('hidden');
    }, 1800);
});



// RESPONSIVE HAMBURGER ICON
const burgerBtn = document.querySelector('.burger');
const barsIco = burgerBtn.querySelector('.fa-bars');
const xIco = burgerBtn.querySelector('.fa-times');
const navList = document.querySelector('.nav-list');

const handleNav = () => {
    navList.classList.toggle('active');
    burgerBtn.classList.toggle('active');
    barsIco.classList.toggle('hide');
    xIco.classList.toggle('hide');
}

burgerBtn.addEventListener('click', handleNav);



// SECTIONS
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.about-me-content');
    sections.forEach(section => {
      section.style.display = 'none';
    });

    // Show selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
      activeSection.style.display = 'grid';
    }
  }

  // Set section visible by default
  showSection('education-section');