const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const mobileToggle = document.querySelector('.mobile-toggle');
const topnav = document.querySelector('.topnav');
const tabs = document.querySelectorAll('.tab');
const skillCards = document.querySelectorAll('.skill-card');

function handleScroll() {
  const scrollY = window.pageYOffset;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      const id = section.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}

function handleTab(event) {
  const selected = event.currentTarget.dataset.tab;
  tabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.tab === selected));
  skillCards.forEach((card) => {
    const isActive = card.dataset.group === selected;
    card.classList.toggle('active', isActive);
    card.style.display = isActive ? 'grid' : 'none';
  });
}

function toggleMobileNav() {
  topnav.classList.toggle('open');
}

mobileToggle.addEventListener('click', toggleMobileNav);
navLinks.forEach((link) => link.addEventListener('click', () => topnav.classList.remove('open')));
window.addEventListener('scroll', handleScroll);
tabs.forEach((tab) => tab.addEventListener('click', handleTab));

// Initialize skill filters
skillCards.forEach((card) => {
  if (!card.classList.contains('active') && card.dataset.group !== 'tech') {
    card.style.display = 'none';
  }
});

handleScroll();


function openModal(src) {
  const modal = document.getElementById("imgModal");
  const img = document.getElementById("modalImg");

  modal.style.display = "flex";
  img.src = src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}