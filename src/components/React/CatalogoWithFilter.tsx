import { useState, useMemo } from 'react';
import type { Modelo } from '../../utils/types';
import ModelCardWithModal from './ModelCardWithModal';

interface Props {
  modelos: Modelo[];
}

export default function CatalogoWithFilter({ modelos }: Props) {
  const [filtroActivo, setFiltroActivo] = useState<string>('todas');

  // Filtrar modelos según la ciudad seleccionada
  const modelosFiltrados = useMemo(() => {
    if (filtroActivo === 'todas') {
      return modelos;
    }
    return modelos.filter(modelo => 
      modelo.ciudad.toLowerCase() === filtroActivo.toLowerCase()
    );
  }, [modelos, filtroActivo]);

  // Contar modelos por ciudad
  const contarPorCiudad = useMemo(() => {
    const contadores = {
      total: modelos.length,
      'San Pedro Sula': 0,
      'Tegucigalpa': 0
    };
    
    modelos.forEach(modelo => {
      if (modelo.ciudad === 'San Pedro Sula') {
        contadores['San Pedro Sula']++;
      } else if (modelo.ciudad === 'Tegucigalpa') {
        contadores['Tegucigalpa']++;
      }
    });
    
    return contadores;
  }, [modelos]);

  return (
    <div className="mt-10">
      {/* Filtros por ciudad */}
      <div className="flex flex-col sm:flex-row justify-center items-center mb-8 gap-4">
        <button
          onClick={() => setFiltroActivo('todas')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 min-w-[200px] ${
            filtroActivo === 'todas'
              ? 'bg-[#094FC3] text-white shadow-lg transform scale-105'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Todas las ciudades
          <span className="block text-sm opacity-80">
            ({contarPorCiudad.total} modelos)
          </span>
        </button>
        
        <button
          onClick={() => setFiltroActivo('San Pedro Sula')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 min-w-[200px] ${
            filtroActivo === 'San Pedro Sula'
              ? 'bg-[#094FC3] text-white shadow-lg transform scale-105'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          San Pedro Sula
          <span className="block text-sm opacity-80">
            ({contarPorCiudad['San Pedro Sula']} modelos)
          </span>
        </button>
        
        <button
          onClick={() => setFiltroActivo('Tegucigalpa')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 min-w-[200px] ${
            filtroActivo === 'Tegucigalpa'
              ? 'bg-[#094FC3] text-white shadow-lg transform scale-105'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          Tegucigalpa
          <span className="block text-sm opacity-80">
            ({contarPorCiudad['Tegucigalpa']} modelos)
          </span>
        </button>
      </div>

      {/* Información de resultados */}
      <div className="text-center mb-6">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {filtroActivo === 'todas' 
            ? `Mostrando todos los ${modelosFiltrados.length} modelos` 
            : `Mostrando ${modelosFiltrados.length} modelo(s) de ${filtroActivo}`
          }
        </p>
      </div>

      {/* Grid de modelos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {modelosFiltrados.map((modelo, index) => (
          <ModelCardWithModal 
            key={`${modelo.nombre}-${index}`} 
            modelo={modelo} 
          />
        ))}
      </div>

      {/* Mensaje cuando no hay resultados */}
      {modelosFiltrados.length === 0 && (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              No hay modelos disponibles
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              No se encontraron modelos en {filtroActivo}. 
              Intenta seleccionar otra ciudad.
            </p>
          </div>
        </div>
      )}

      {/* Estadísticas resumidas */}
      {filtroActivo === 'todas' && modelosFiltrados.length > 0 && (
        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-center mb-4 text-gray-800 dark:text-white">
            Distribución por Ciudad
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
              <div className="text-2xl font-bold text-[#094FC3]">
                {contarPorCiudad['San Pedro Sula']}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                San Pedro Sula
              </div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
              <div className="text-2xl font-bold text-[#094FC3]">
                {contarPorCiudad['Tegucigalpa']}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Tegucigalpa
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}