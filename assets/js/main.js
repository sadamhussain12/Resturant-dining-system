
const toggler = document.querySelector('.navbar-toggler');
const navMenu = document.querySelector('#navbarNav');

toggler.addEventListener('click', function () {
  this.classList.toggle('active');
});

// Optional: Close menu when a link is clicked
document.querySelectorAll('#navbarNav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    toggler.classList.remove('active');
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
      document.querySelector('.navbar-toggler').click();
    }
  });
});

document.querySelectorAll('#blog .position-relative').forEach(card => {
  const overlay = card.querySelector('.bg-dark');
  card.addEventListener('mouseenter', () => overlay.style.opacity = '1');
  card.addEventListener('mouseleave', () => overlay.style.opacity = '0');
});

document.querySelectorAll('#testimonials .card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
    card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
  });
});

document.querySelectorAll('#featured-menu .card').forEach(card => {
  const imgDesktop = card.querySelector('.card-img'); // may be null on small
  const imgRatio = card.querySelector('.ratio img'); // may be null on large
  const btn = card.querySelector('.btn');

  // Image zoom on hover (desktop)
  card.addEventListener('mouseenter', () => {
    if (imgDesktop) imgDesktop.style.transform = 'scale(1.08)';
    if (imgRatio) imgRatio.style.transform = 'scale(1.08)';
  });
  card.addEventListener('mouseleave', () => {
    if (imgDesktop) imgDesktop.style.transform = 'scale(1)';
    if (imgRatio) imgRatio.style.transform = 'scale(1)';
  });

  // Button zoom
  if (btn) {
    btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.08)');
    btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
  }
});

// small appear-on-scroll for subtle entrance
(function () {
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.glass, .info-card, .map-card, .contact-modern .container > .row').forEach(el => obs.observe(el));
})();

// simple UX for form submit (simulate)
document.getElementById('modernContactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = document.getElementById('m-send');
  btn.disabled = true;
  btn.innerText = 'Sending...';
  setTimeout(() => { btn.disabled = false; btn.innerText = 'Send Message'; alert('Thanks — we received your message.'); this.reset(); }, 1000);
});