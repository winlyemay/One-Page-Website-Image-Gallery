document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.gallery img');

  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  const lightboxImage = document.createElement('img');
  lightbox.appendChild(lightboxImage);

  // Lightbox styles
  lightbox.style.position = 'fixed';
  lightbox.style.top = 0;
  lightbox.style.left = 0;
  lightbox.style.width = '100%';
  lightbox.style.height = '100%';
  lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
  lightbox.style.display = 'none';
  lightbox.style.justifyContent = 'center';
  lightbox.style.alignItems = 'center';
  lightbox.style.zIndex = 1000;

  lightboxImage.style.maxWidth = '90%';
  lightboxImage.style.maxHeight = '80%';
  lightboxImage.style.border = '5px solid white';
  lightboxImage.style.borderRadius = '10px';

  // Show image in lightbox
  images.forEach(img => {
    img.addEventListener('click', () => {
      const largeImageURL = img.getAttribute('data-large');
      lightboxImage.src = largeImageURL;
      lightbox.style.display = 'flex';
    });
  });

  // Close lightbox on click
  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
});
