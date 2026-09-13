// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Animate metric bars + counters once they scroll into view
const metrics = document.querySelectorAll('.metric');

const countUp = (el, target) => {
  const duration = 900;
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(progress * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const metric = entry.target;
    const valueEl = metric.querySelector('.metric-value');
    const barEl = metric.querySelector('.metric-bar');
    const target = Number(valueEl.dataset.count);

    countUp(valueEl, target);
    barEl.classList.add('filled');

    observer.unobserve(metric);
  });
}, { threshold: 0.4 });

metrics.forEach((m) => observer.observe(m));

// Active nav link highlight while scrolling
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.getAttribute('id');
    navLinks.forEach((link) => {
      link.style.color = link.getAttribute('href') === `#${id}` ? '' : '';
    });
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach((s) => navObserver.observe(s));
