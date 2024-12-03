document.querySelectorAll('.thumbnail-images img').forEach((thumbnail) => {
  thumbnail.addEventListener('click', (e) => {
    document.querySelector('.product-image img').src = e.target.src;
    document.querySelectorAll('.thumbnail-images img').forEach(img => img.classList.remove('active'));
    e.target.classList.add('active');
  });
});
