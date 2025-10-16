  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => link.style.color = 'var(--primary-color)');
    link.addEventListener('mouseleave', () => {
      if (!link.classList.contains('active')) link.style.color = 'white';
    });
  });