import { useState, useEffect } from 'react';
import type { Modelo } from '../../utils/types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  modelo: Modelo;
}

export default function GaleriaModal({ isOpen, onClose, modelo }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isImageChanging, setIsImageChanging] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  const handlePrev = () => {
    setIsImageChanging(true);
    setTimeout(() => {
      setCurrentIndex((prev) => prev === 0 ? modelo.fotos.length - 1 : prev - 1);
      setIsImageChanging(false);
    }, 200);
  };
  
  const handleNext = () => {
    setIsImageChanging(true);
    setTimeout(() => {
      setCurrentIndex((prev) => prev === modelo.fotos.length - 1 ? 0 : prev + 1);
      setIsImageChanging(false);
    }, 200);
  };
  
  const handleThumbnailClick = (index: number) => {
    if (index === currentIndex) return;
    
    setIsImageChanging(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsImageChanging(false);
    }, 200);
  };
  
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 transition-opacity duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} 
      onClick={onClose}
    >
      <div 
        className={`relative bg-white/5 rounded-lg p-6 max-w-5xl w-full max-h-[90vh] overflow-hidden transition-transform duration-300 ease-in-out ${
          isVisible ? 'scale-100' : 'scale-95'
        }`} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button 
          className="absolute top-2 right-2 text-white text-2xl hover:text-pink-500 transition-colors z-10"
          onClick={onClose}
        >
          ✕
        </button>
        
        {/* Título */}
        <h2 className="text-white text-xl md:text-2xl font-bold mb-4 text-center">
          {modelo.nombre.split(/(?=[A-ZÁÉÍÓÚ])/).join(" ")}
        </h2>
        
        <div className="flex flex-col md:flex-row gap-4 h-[calc(100%-4rem)] overflow-hidden">
          {/* Miniaturas a la izquierda (en pantallas medianas y grandes) */}
          <div className="md:w-1/4 h-24 md:h-full md:max-h-[70vh] overflow-y-auto overflow-x-auto md:overflow-x-hidden flex md:flex-col gap-2 order-2 md:order-1">
            {modelo.fotos.map((foto, index) => (
              <div 
                key={index}
                className={`flex-shrink-0 cursor-pointer w-16 h-20 md:w-full md:h-28 border-2 rounded transition-all duration-200 ease-in-out ${
                  index === currentIndex ? 'border-pink-500 scale-100' : 'border-white/20 hover:border-pink-300'
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img 
                  src={foto.url} 
                  alt={foto.alt}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>
          
          {/* Contenedor de la imagen principal a la derecha */}
          <div className="relative md:w-3/4 h-64 md:h-[70vh] rounded-lg overflow-hidden order-1 md:order-2">
            <div className={`w-full h-full transition-opacity duration-300 ease-in-out ${isImageChanging ? 'opacity-0' : 'opacity-100'}`}>
              <img 
                src={modelo.fotos[currentIndex].url} 
                alt={modelo.fotos[currentIndex].alt}
                className="w-full h-full object-contain bg-black/30"
              />
            </div>
            
            {/* Botones de navegación */}
            <button 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-pink-600 transition-colors"
              onClick={handlePrev}
              disabled={isImageChanging}
            >
              &#10094;
            </button>
            <button 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-pink-600 transition-colors"
              onClick={handleNext}
              disabled={isImageChanging}
            >
              &#10095;
            </button>
            
            {/* Contador de imágenes */}
            <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-sm">
              {currentIndex + 1} / {modelo.fotos.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}