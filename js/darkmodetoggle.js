(() => {
  'use strict';

  const storedTheme = localStorage.getItem('theme');

  const getPreferredTheme = () => {
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  };

  const init = () => {
    setTheme(getPreferredTheme());

    document.querySelectorAll('[data-bs-theme-value]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const selectedTheme = btn.getAttribute('data-bs-theme-value');
        localStorage.setItem('theme', selectedTheme);
        setTheme(selectedTheme);
      });
    });
  };

  window.addEventListener('DOMContentLoaded', init);
})();
