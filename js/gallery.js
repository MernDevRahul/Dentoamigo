const gallery = document.querySelector('#gallery');

const getVal = (elem, style) => parseInt(window.getComputedStyle(elem).getPropertyValue(style));
const getHeight = item => item.querySelector('.content').getBoundingClientRect().height;

const resizeAll = () => {
  const rowHeight = getVal(gallery, 'grid-auto-rows');
  const rowGap = getVal(gallery, 'grid-row-gap');
  gallery.querySelectorAll('.gallery-item').forEach(item => {
    item.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + rowGap) / (rowHeight + rowGap));
  });
};

// Handle both images and videos
const allMedia = gallery.querySelectorAll('img, video');

allMedia.forEach(media => {
  if ((media.tagName === 'IMG' && media.complete) || media.tagName === 'VIDEO') {
    resizeAll();
  }

  media.addEventListener('load', resizeAll);
  media.addEventListener('loadeddata', resizeAll); // for video
});

window.addEventListener('resize', resizeAll);

gallery.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => item.classList.toggle('full'));
});