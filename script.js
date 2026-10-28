const photos = [
  {
    src: 'https://images.jdmagicbox.com/v2/comp/sasaram/b1/9999p6188.6188.260831135352.b3b1/catalogue/cakevillassm-by-shailvi-udhopur-sasaram-cake-shops-mxrp4bfzc5-250.jpg',
    alt: 'Lavender birthday cake with purple butterflies and gold decorations',
    title: 'Lavender butterfly birthday cake',
    category: 'birthday',
  },
  {
    src: 'https://images.jdmagicbox.com/v2/comp/sasaram/b1/9999p6188.6188.260831135352.b3b1/catalogue/cakevillassm-by-shailvi-udhopur-sasaram-cake-shops-grc35au82o-250.jpg',
    alt: 'Pink frosted birthday cake decorated with pastel butterflies',
    title: 'Pastel butterfly birthday cake',
    category: 'birthday',
  },
  {
    src: 'https://images.jdmagicbox.com/v2/comp/sasaram/b1/9999p6188.6188.260831135352.b3b1/catalogue/cakevillassm-by-shailvi-udhopur-sasaram-cake-shops-dz5sfli6xu-250.jpg',
    alt: 'Two-tier blue and white birthday cake with clouds and stars',
    title: 'Cloud nine birthday cake',
    category: 'birthday',
  },
  {
    src: 'https://images.jdmagicbox.com/v2/comp/sasaram/b1/9999p6188.6188.260831135352.b3b1/catalogue/cakevillassm-by-shailvi-udhopur-sasaram-cake-shops-qv8083l90y-250.jpg',
    alt: 'Blue unicorn cake decorated with butterflies and flowers',
    title: 'Unicorn dream cake',
    category: 'kids',
  },
  {
    src: 'https://images.jdmagicbox.com/v2/comp/sasaram/b1/9999p6188.6188.260831135352.b3b1/catalogue/cakevillassm-by-shailvi-udhopur-sasaram-cake-shops-eo55ixmqbe-250.jpg',
    alt: 'White frosted cake decorated with red ribbons and piped hearts',
    title: 'Hearts & ribbons cake',
    category: 'birthday',
  },
  {
    src: 'https://images.jdmagicbox.com/v2/comp/sasaram/b1/9999p6188.6188.260831135352.b3b1/catalogue/cakevillassm-by-shailvi-udhopur-sasaram-cake-shops-83l4o6btgy-250.jpg',
    alt: 'White cake decorated with gold leaf and black and gold spheres',
    title: 'Black & gold celebration cake',
    category: 'birthday',
  },
  {
    src: 'https://images.jdmagicbox.com/v2/comp/sasaram/b1/9999p6188.6188.260831135352.b3b1/catalogue/cakevillassm-by-shailvi-udhopur-sasaram-cake-shops-jlkwadoo2i-250.jpg',
    alt: 'Purple and white birthday cake with butterflies and gold spheres',
    title: 'Purple butterfly celebration cake',
    category: 'birthday',
  },
  {
    src: 'https://images.jdmagicbox.com/v2/comp/sasaram/b1/9999p6188.6188.260831135352.b3b1/catalogue/cakevillassm-by-shailvi-udhopur-sasaram-cake-shops-anrr7slv5v-250.jpg',
    alt: 'White cake decorated with fresh roses and a heart-shaped topper',
    title: 'Rose garden cake',
    category: 'birthday',
  },
  {
    src: 'https://images.jdmagicbox.com/v2/comp/sasaram/b1/9999p6188.6188.260831135352.b3b1/catalogue/cakevillassm-by-shailvi-udhopur-sasaram-cake-shops-264ionfhr0-250.jpg',
    alt: 'Pink and purple frosted cake with butterfly toppers and pearl sprinkles',
    title: 'Pastel wings cake',
    category: 'birthday',
  },
  {
    src: 'https://images.jdmagicbox.com/v2/comp/sasaram/b1/9999p6188.6188.260831135352.b3b1/catalogue/cakevillassm-by-shailvi-udhopur-sasaram-cake-shops-5ik7y39jyw-250.jpg',
    alt: 'Two-tier white cake decorated with Mickey Mouse figures',
    title: 'Mickey Mouse celebration cake',
    category: 'kids',
  },
  {
    src: 'https://images.jdmagicbox.com/v2/comp/sasaram/b1/9999p6188.6188.260831135352.b3b1/catalogue/cakevillassm-by-shailvi-udhopur-sasaram-cake-shops-l70aqddy0i-250.jpg',
    alt: 'White birthday cake decorated with red roses and baby’s breath',
    title: 'Red rose birthday cake',
    category: 'birthday',
  },
  {
    src: 'https://images.jdmagicbox.com/v2/comp/sasaram/b1/9999p6188.6188.260831135352.b3b1/catalogue/cakevillassm-by-shailvi-udhopur-sasaram-cake-shops-p0vzj30j57-250.jpg',
    alt: 'Purple two-tier fairy birthday cake with butterfly wings and a mushroom house',
    title: 'Fairy garden cake',
    category: 'kids',
  },
  {
    src: 'https://images.jdmagicbox.com/v2/comp/sasaram/b1/9999p6188.6188.260831135352.b3b1/catalogue/cakevillassm-by-shailvi-udhopur-sasaram-cake-shops-04tts8gkvg-250.jpg',
    alt: 'Blue fairy-themed birthday cake with a flower box',
    title: 'Blue fairy birthday cake',
    category: 'kids',
  },
  {
    src: 'https://images.jdmagicbox.com/v2/comp/sasaram/b1/9999p6188.6188.260831135352.b3b1/catalogue/cakevillassm-by-shailvi-udhopur-sasaram-cake-shops-v0n316ko2w-250.jpg',
    alt: 'White wedding cake decorated with red roses and pearl beads',
    title: 'Wedding day cake',
    category: 'wedding',
  },
  {
    src: 'https://images.jdmagicbox.com/v2/comp/sasaram/b1/9999p6188.6188.260831135352.b3b1/catalogue/cakevillassm-by-shailvi-udhopur-sasaram-cake-shops-yclvt8zc8n-250.jpg',
    alt: 'Purple butterfly fairy birthday cake with a princess topper',
    title: 'Princess butterfly cake',
    category: 'kids',
  },
];

const grid = document.querySelector('#gallery-grid');
const filterButtons = [...document.querySelectorAll('.filter-button')];
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxCount = document.querySelector('.lightbox-count');
let visiblePhotos = photos;
let currentPhotoIndex = 0;
let previousFocus = null;

const labelForCategory = (category) => ({
  birthday: 'Birthday',
  kids: 'Kids’ theme',
  wedding: 'Wedding',
}[category]);

function renderGallery(category = 'all') {
  visiblePhotos = category === 'all' ? photos : photos.filter((photo) => photo.category === category);
  grid.innerHTML = visiblePhotos.map((photo, index) => `
    <button class="gallery-card" type="button" data-photo-index="${index}" aria-label="View ${photo.title}">
      <img class="gallery-card-image" src="${photo.src}" alt="${photo.alt}" loading="lazy" />
      <span class="gallery-card-tag">${labelForCategory(photo.category)}</span>
      <span class="gallery-card-caption">${photo.title}</span>
    </button>
  `).join('');

  grid.querySelectorAll('.gallery-card').forEach((card) => {
    card.addEventListener('click', () => openLightbox(Number(card.dataset.photoIndex)));
  });
}

function showPhoto(index) {
  currentPhotoIndex = (index + visiblePhotos.length) % visiblePhotos.length;
  const photo = visiblePhotos[currentPhotoIndex];
  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.alt;
  lightboxCaption.textContent = photo.title;
  lightboxCount.textContent = `${String(currentPhotoIndex + 1).padStart(2, '0')} / ${String(visiblePhotos.length).padStart(2, '0')}`;
}

function openLightbox(index) {
  previousFocus = document.activeElement;
  showPhoto(index);
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-active');
  lightbox.querySelector('.lightbox-close').focus();
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-active');
  if (previousFocus instanceof HTMLElement) previousFocus.focus();
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    renderGallery(button.dataset.filter);
  });
});

lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showPhoto(currentPhotoIndex - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => showPhoto(currentPhotoIndex + 1));
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (!lightbox.classList.contains('is-open')) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') showPhoto(currentPhotoIndex - 1);
  if (event.key === 'ArrowRight') showPhoto(currentPhotoIndex + 1);
});

renderGallery();
