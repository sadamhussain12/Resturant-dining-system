
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
