const files = import.meta.glob(
  "../assets/gallery/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
  }
);

export const galleryImages = Object.values(files).map(
  (file, index) => ({
    id: index,
    src: file.default,
    alt: `Galeria ${index + 1}`,
  })
);