const gallery = document.getElementById('gallery');

const images = [
  "https://picsum.photos/300?1",
  "https://picsum.photos/300?2",
  "https://picsum.photos/300?3"
];

images.forEach(url => {
  const img = document.createElement('img');
  img.src = url;
  gallery.appendChild(img);
});