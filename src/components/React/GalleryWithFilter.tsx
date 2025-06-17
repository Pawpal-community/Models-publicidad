import { useState, useMemo } from 'react';
import type { Modelo } from '../../utils/types';
import ModelCardWithModal from './ModelCardWithModal';

interface Props {
  images: Modelo[];
}

export default function GalleryWithFilter({ images }: Props) {
  const [filtroActivo, setFiltroActivo] = useState<string>('todas');

  // Filtrar imágenes según la ciudad seleccionada
  const imagenesRiltradas = useMemo(() => {
    if (filtroActivo === 'todas') {
      return images;
    }
    return images.filter(modelo => 
      modelo.ciudad.toLowerCase() === filtroActivo.toLowerCase()
    );
  }, [images, filtroActivo]);

  // Obtener imágenes para mostrar (máximo 8)
  const imagenesParaMostrar = imagenesRiltradas.slice(0, 8);

  return (
    <div>
      {/* Filtros por ciudad */}
      <div className="flex justify-center mb-8 gap-4">
        <button
          onClick={() => setFiltroActivo('todas')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            filtroActivo === 'todas'
              ? 'bg-[#094FC3] text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Todas las ciudades
        </button>
        <button
          onClick={() => setFiltroActivo('San Pedro Sula')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            filtroActivo === 'San Pedro Sula'
              ? 'bg-[#094FC3] text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          San Pedro Sula
        </button>
        <button
          onClick={() => setFiltroActivo('Tegucigalpa')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            filtroActivo === 'Tegucigalpa'
              ? 'bg-[#094FC3] text-white shadow-lg'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Tegucigalpa
        </button>
      </div>

      {/* Grid de modelos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {imagenesParaMostrar.map((modelo, index) => (
          <div 
            key={`${modelo.nombre}-${index}`}
            className={`
              ${index >= 5 ? "max-sm:sr-only max-sm:h-0 max-sm:overflow-hidden" : ""} 
              ${index >= 6 ? "max-md:sr-only max-md:h-0 max-md:overflow-hidden" : ""}
            `}
          >
            <ModelCardWithModal modelo={modelo} />
          </div>
        ))}
      </div>

      {/* Mensaje cuando no hay resultados */}
      {imagenesRiltradas.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No se encontraron modelos en {filtroActivo}
          </p>
        </div>
      )}

      {/* Contador de resultados */}
      {filtroActivo !== 'todas' && imagenesRiltradas.length > 0 && (
        <div className="text-center mt-4 mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Mostrando {Math.min(imagenesParaMostrar.length, 8)} de {imagenesRiltradas.length} modelo(s) en {filtroActivo}
          </p>
        </div>
      )}
    </div>
  );
}