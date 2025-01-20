document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });

  // for dark-mode
  let darkmode = localStorage.getItem('darkmode');
  const themeSwitch = document.getElementById('theme-switch');

  const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
  };
  const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
  };

  if (darkmode === 'active') enableDarkMode();

  themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== 'active' ? enableDarkMode() : disableDarkMode();
  });

  const container = document.getElementById('containerLogin');
  const overlayCon = document.getElementById('overlayCon');
  const overlayBtn = document.getElementById('overlayBtn');

  overlayBtn.addEventListener('click', () => {
    container.classList.toggle('right-panel-active');
    container.classList.remove('btnScaled');
    window.requestAnimationFrame(() => {
      overlayCon.classList.add('btnScaled');
    });
  });
});
