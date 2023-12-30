// Footer year
const footerYear = document.querySelector('[data-footer-year]');

if (typeof footerYear !== 'undefined') {
  footerYear.innerText = new Date().getFullYear();
}
