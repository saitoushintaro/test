document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.fade-image');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.parentElement.classList.add('in-view');
      } else {
        entry.target.parentElement.classList.remove('in-view');
      }
    });
  }, { threshold: 0.5 });

  images.forEach(image => {
    observer.observe(image);
  });
});
