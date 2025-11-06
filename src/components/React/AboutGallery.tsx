import { useState, useEffect } from "react";

interface ImageData {
  url: string;
  alt: string;
}

export default function AboutGallery() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🧠 Fetch images from our new API route
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/images");
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };
    fetchImages();
  }, []);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };
  const closeModal = () => setOpen(false);
  const nextImage = () => setCurrentIndex((p) => (p + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((p) => (p - 1 + images.length) % images.length);

  if (images.length === 0) {
    return <p className="text-center text-gray-400">Cargando galería...</p>;
  }

  // Only show first 8 images in preview
  const previewImages = images.slice(0, 8);

  return (
    <div className="relative group">
      {/* 🖼️ Grid preview - 4 columns × 2 rows */}
      <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-2 rounded-2xl overflow-hidden">
        {previewImages.map((img, i) => (
          <img
            key={i}
            src={img.url}
            alt={`foto de evento o activacion de models publicidad numero ${i + 1}`}
            loading="lazy"
            className="
              object-cover object-center
              w-full h-24 sm:h-32
              rounded-lg cursor-pointer
              hover:opacity-80 transition
            "
            onClick={() => openModal(i)}
          />
        ))}
      </div>

      {/* Overlay */}
      <button
        onClick={() => openModal(0)}
        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-medium text-lg"
      >
        Ver galería completa
      </button>

      {/* Modal - shows all images */}
      {open && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-gray-300 transition"
            onClick={closeModal}
          >
            ✕
          </button>

          <div className="relative max-w-5xl w-full flex flex-col items-center">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              className="max-h-[85vh] rounded-lg shadow-lg"
            />
            <p className="text-white mt-4 text-center">
              {currentIndex + 1} / {images.length}
            </p>

            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 text-white text-4xl font-bold select-none hover:text-gray-300 transition"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 text-white text-4xl font-bold select-none hover:text-gray-300 transition"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}