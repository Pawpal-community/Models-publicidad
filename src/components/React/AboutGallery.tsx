import { useState } from "react";

interface GalleryProps {
  images: { src: string; alt: string }[];
}

export default function Gallery({ images }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative group">
      {/* Grid preview */}
      <div
        className="
          grid grid-rows-2 grid-flow-col
          gap-2 rounded-2xl overflow-hidden
          sm:grid-rows-2 sm:grid-flow-col
        "
      >
        {images
          // Mobile → show 8 (4x2)
          // Desktop → show 16 (8x2)
          .slice(0, window.innerWidth < 640 ? 8 : 16)
          .map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="
                object-cover object-top
                w-full h-24 sm:h-32
                rounded-lg cursor-pointer
                hover:opacity-80 transition
              "
              onClick={() => openModal(index)}
            />
          ))}
      </div>

      {/* Overlay button */}
      <button
        onClick={() => openModal(0)}
        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-medium text-lg"
      >
        Ver galería completa
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-6 text-white text-3xl font-bold"
            onClick={closeModal}
          >
            ✕
          </button>

          <div className="relative max-w-5xl w-full flex flex-col items-center">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-h-[85vh] rounded-lg shadow-lg"
            />
            <p className="text-white mt-4 text-center">
              {images[currentIndex].alt}
            </p>

            {/* Navigation arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-8 text-white text-4xl font-bold select-none"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-8 text-white text-4xl font-bold select-none"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
