document.addEventListener('DOMContentLoaded', function () {
  const yearElement = document.getElementById('year-placeholder');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});