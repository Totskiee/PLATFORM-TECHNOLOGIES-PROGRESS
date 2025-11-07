const hero = document.querySelector('.hero');
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

// Movie info elements
const title = document.getElementById('movie-title');
const fullTitle = document.getElementById('movie-full-title');
const genre = document.getElementById('movie-genre');
const wiki = document.getElementById('wiki-link');
const releaseDate = document.getElementById('movie-date');
const description = document.getElementById('movie-description');

let current = 0;

function updateCarousel(index) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });

  const activeItem = items[index];
  const bgImage = activeItem.getAttribute('data-bg');
  const movieTitle = activeItem.getAttribute('data-title');
  const movieFullTitle = activeItem.getAttribute('data-fulltitle');
  const movieGenre = activeItem.getAttribute('data-genre');
  const movieWiki = activeItem.getAttribute('data-wiki');
  const movieDate = activeItem.getAttribute('data-date');
  const movieDescription = activeItem.getAttribute('data-description');

  // Update hero and movie info
  hero.style.backgroundImage = `url(${bgImage})`;
  title.textContent = movieTitle;
  fullTitle.textContent = movieFullTitle;
  genre.textContent = movieGenre;
  wiki.textContent = `Wikipedia.com/${movieTitle}`;
  wiki.href = movieWiki;
  releaseDate.textContent = movieDate;
  description.textContent = movieDescription;

  current = index;
}

// Click listeners
items.forEach((item, index) => {
  item.addEventListener('click', () => updateCarousel(index));
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => updateCarousel(index));
});

// Auto-rotate every 4 seconds
setInterval(() => {
  current = (current + 1) % items.length;
  updateCarousel(current);
}, 4000);

// Initialize
updateCarousel(0);

