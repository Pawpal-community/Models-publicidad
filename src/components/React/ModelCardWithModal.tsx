import { useState } from 'react';
import GaleriaModal from './GaleriaModal';
import { Image } from 'astro:assets';
import type { Modelo } from '../../utils/types';

interface Props {
  modelo: Modelo;
}

export default function ModelCardWithModal({ modelo }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const primeraFoto = modelo.fotos[0];

  console.log(primeraFoto)
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const formatearNombre = (nombre: string) => {
    return nombre.split(/(?=[A-ZÁÉÍÓÚ])/).join(" ");
  };
  
  return (
    <>
      <div className="rounded-lg bg-box-bg shadow-md transition-all duration-300 hover:shadow-xl group relative cursor-pointer border border-box-border">
        {/* Contenedor de la imagen */}
        <div className="md:max-h-[300px] overflow-hidden">
          <img
            src={primeraFoto.url}
            alt= {`foto de la modelo o edecan ${formatearNombre(modelo.nombre)}` || "Foto de modelo o edecan"}
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
        <div className="p-4 flex flex-col justify-between">
          <div>
            <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {formatearNombre(modelo.nombre)}
            </p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {modelo.ciudad}
            </p>
          </div>
          
          {/* Botón para ver la galería */}
          <button 
            onClick={openModal}
            className="flex items-center justify-center gap-2 
        bg-[#094FC3] text-white px-6 py-3 
        rounded-full font-bold 
        hover:bg-[#0B6052] 
        transition-colors duration-300 ease-in-out 
        shadow-lg group"
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