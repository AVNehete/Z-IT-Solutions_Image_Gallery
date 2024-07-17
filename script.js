  const galleryContainer = document.getElementById('gallery-container');
  const totalImages = 50; 
  const imagePath = galleryContainer.getAttribute('data-path');
  const imageBase = galleryContainer.getAttribute('data-base');

  for (let i = 1; i <= totalImages; i++) {
      const imageFile = `${imageBase}${i}.jpg`;

      const anchor = document.createElement('a');
      anchor.href = `${imagePath}/${imageFile}`;
      anchor.classList.add('galleryContainer-item');
      anchor.target = '_blank';

      const img = document.createElement('img');
      img.src = `${imagePath}/${imageFile}`;
      img.alt = imageFile;
      img.classList.add('galleryContainer-image');

      anchor.appendChild(img);
      galleryContainer.appendChild(anchor);

      img.addEventListener('click', (event) => {
          event.preventDefault();
          FullImage(`${imagePath}/${imageFile}`);
      });
  }

  const Imgcontainer = document.getElementById('Full-image-container');
  const fullImage = document.getElementById('Full-image');

  function FullImage(src) {
    Imgcontainer.style.display = "block";
      fullImage.src = src;
  }

  window.onclick = function (event) {
      if (event.target == Imgcontainer) {
        Imgcontainer.style.display = "none";
      }
  }
