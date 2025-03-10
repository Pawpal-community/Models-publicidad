import { useState } from 'react';
import GaleriaModal from './GaleriaModal';
import type { Modelo } from '../../utils/types';

interface Props {
  modelo: Modelo;
}

export default function ModelCardWithModal({ modelo }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const primeraFoto = modelo.fotos[0];
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const formatearNombre = (nombre: string) => {
    return nombre.split(/(?=[A-ZÁÉÍÓÚ])/).join(" ");
  };
  
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group relative cursor-pointer">
        {/* Contenedor de la imagen */}
        <div className="max-h-[350px] overflow-hidden">
          <img
            src={primeraFoto.url}
            alt={primeraFoto.alt}
            className="w-full h-full  transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay con nombre al pasar el cursor */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
            <p className="text-white text-center text-xl font-bold">
              {formatearNombre(modelo.nombre)}
            </p>
          </div> */}
        </div>
        
        {/* Información del modelo */}
        <div className="p-4 flex flex-col justify-between h-32">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {formatearNombre(modelo.nombre)}
            </h3>
          </div>
          
          {/* Botón para ver la galería */}
          <button 
            onClick={openModal}
            className="mt-auto bg-[#2563eb] p-3 text-white hover:bg-blue-800 text-sm font-medium"
          >
            Ver mas fotos
          </button>
        </div>
      </div>
      
      <GaleriaModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        modelo={modelo} 
      />
    </>
  );
}