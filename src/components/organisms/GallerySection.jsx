import GalleryItem from "../molecules/GalleryItem"
import SectionTitle from "../atoms/SectionTitle";
import { galleryImages } from "../../data/gallery";

export default function GallerySection() {
  if (!galleryImages.length) return null;

  return (
    <section className="py-20 px-6 bg-brasa/40 bg-pattern">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <SectionTitle title="✦ Momentos sagrados ✦" subtitle="Galeria" />

          <div className="gold-divider max-w-xs mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <GalleryItem key={index} image={img} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
}