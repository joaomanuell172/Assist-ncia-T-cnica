
const cards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });

cards.forEach(c => observer.observe(c));
