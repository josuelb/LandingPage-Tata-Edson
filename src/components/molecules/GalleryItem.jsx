export default function GalleryItem({
  image,
  index
}) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      className="
        w-full
        h-full
        object-cover
        photo-frame
        rounded-sm
        hover:scale-[1.02]
        transition-transform
        duration-300
      "
    />
  );
}