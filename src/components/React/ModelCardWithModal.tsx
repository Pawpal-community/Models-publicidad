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
      <div className="group relative cursor-pointer" onClick={openModal}>
        <img
          src={primeraFoto.url}
          alt={primeraFoto.alt}
          className="rounded-lg shadow-lg w-full h-full object-cover hover:scale-105 transition-transform"
          loading="lazy"
        />
        {/* Overlay con nombre del modelo */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 rounded-lg">
          <p className="text-white text-center text-lg font-bold">
            {formatearNombre(modelo.nombre)}
          </p>
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