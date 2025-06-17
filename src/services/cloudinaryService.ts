import { v2 as cloudinary } from "cloudinary";
import type {
  CloudinaryImage,
  Modelo,
  Folder,
  CloudinaryResource,
} from "../utils/types";

cloudinary.config({
  cloud_name: import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

// Lista de carpetas de ciudades disponibles (nombres exactos en Cloudinary)

// Mapeo de carpetas de Cloudinary a nombres de ciudades
const CIUDAD_MAPPING: Record<string, string> = {
  "SanPedroSula": "San Pedro Sula",
  "Tegucigalpa": "Tegucigalpa",
  // "LaCeiba": "La Ceiba",
  // "Choloma": "Choloma",
  // "ElProgreso": "El Progreso"
};
const CARPETAS_CIUDADES = Object.keys(CIUDAD_MAPPING);

// Función para obtener modelos de una ciudad específica
async function getModelosPorCiudad(carpetaCiudad: string): Promise<Modelo[]> {
  try {
    const { folders } = await cloudinary.api.sub_folders(carpetaCiudad);
    const nombreCiudad = CIUDAD_MAPPING[carpetaCiudad] || carpetaCiudad;
    
    const modelos: Modelo[] = await Promise.all(
      folders.map(async (folder: Folder) => {
        const result = await cloudinary.search
          .expression(`folder:${folder.path}`)
          .execute();

        return {
          nombre: folder.name.replace(/_/g, ' '),
          ciudad: nombreCiudad,
          carpetaOrigen: carpetaCiudad, // Nombre exacto de la carpeta en Cloudinary
          rutaCompleta: folder.path, // Ruta completa: "SanPedroSula/Maria_Rodriguez"
          fotos: result.resources.map((photo: CloudinaryImage) => ({
            public_id: photo.public_id,
            url: photo.secure_url
          }))
        };
      })
    );

    return modelos;
  } catch (error) {
    console.error(`Error obteniendo modelos de ${carpetaCiudad}:`, error);
    return [];
  }
}

// Función para obtener todas las modelos de todas las ciudades
async function getTodosLosModelos(): Promise<Modelo[]> {
  try {
    const todasLasModelos = await Promise.all(
      CARPETAS_CIUDADES.map(carpeta => getModelosPorCiudad(carpeta))
    );
    
    return todasLasModelos.flat();
  } catch (error) {
    console.error("Error obteniendo todas las modelos:", error);
    return [];
  }
}

// Función para obtener modelos agrupadas por ciudad
async function getModelosAgrupadasPorCiudad(): Promise<Record<string, Modelo[]>> {
  try {
    const resultado: Record<string, Modelo[]> = {};
    
    await Promise.all(
      CARPETAS_CIUDADES.map(async (carpeta) => {
        const modelos = await getModelosPorCiudad(carpeta);
        const nombreCiudad = CIUDAD_MAPPING[carpeta];
        resultado[nombreCiudad] = modelos;
      })
    );
    
    return resultado;
  } catch (error) {
    console.error("Error agrupando modelos por ciudad:", error);
    return {};
  }
}

// Función para obtener estadísticas por ciudad
async function getEstadisticasPorCiudad(): Promise<Record<string, number>> {
  try {
    const estadisticas: Record<string, number> = {};
    
    await Promise.all(
      CARPETAS_CIUDADES.map(async (carpeta) => {
        const modelos = await getModelosPorCiudad(carpeta);
        const nombreCiudad = CIUDAD_MAPPING[carpeta];
        estadisticas[nombreCiudad] = modelos.length;
      })
    );
    
    return estadisticas;
  } catch (error) {
    console.error("Error obteniendo estadísticas:", error);
    return {};
  }
}

// Función auxiliar para obtener modelos por nombre de ciudad (no carpeta)
async function getModelosPorNombreCiudad(nombreCiudad: string): Promise<Modelo[]> {
  const carpeta = Object.entries(CIUDAD_MAPPING).find(([_, nombre]) => nombre === nombreCiudad)?.[0];
  if (!carpeta) {
    console.warn(`No se encontró carpeta para la ciudad: ${nombreCiudad}`);
    return [];
  }
  return getModelosPorCiudad(carpeta);
}

// Exportar funciones
export {
  CARPETAS_CIUDADES,
  CIUDAD_MAPPING,
  getModelosPorCiudad,
  getModelosPorNombreCiudad,
  getTodosLosModelos,
  getModelosAgrupadasPorCiudad,
  getEstadisticasPorCiudad
};

// Exportar por defecto todas las modelos (para mantener compatibilidad)
export default await getTodosLosModelos();