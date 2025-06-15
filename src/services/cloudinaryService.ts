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

// Lista de ciudades disponibles
const CIUDADES = [
  "SanPedroSula",
  "Tegucigalpa",
  // "LaCeiba",
  // "Choloma",
  // "ElProgreso"
  // Añade más ciudades aquí según necesites
];

// Función para obtener modelos de una ciudad específica
async function getModelosPorCiudad(ciudad: string): Promise<Modelo[]> {
  try {
    const { folders } = await cloudinary.api.sub_folders(ciudad);
    
    const modelos: Modelo[] = await Promise.all(
      folders.map(async (folder: Folder) => {
        const result = await cloudinary.search
          .expression(`folder:${folder.path}`)
          .execute();

        return {
          nombre: folder.name.replace(/_/g, ' '),
          ciudad: ciudad.replace(/([A-Z])/g, ' $1').trim(), // Convierte "SanPedroSula" a "San Pedro Sula"
          fotos: result.resources.map((photo: CloudinaryImage) => ({
            public_id: photo.public_id,
            url: photo.secure_url
          }))
        };
      })
    );

    return modelos;
  } catch (error) {
    console.error(`Error obteniendo modelos de ${ciudad}:`, error);
    return [];
  }
}

// Función para obtener todas las modelos de todas las ciudades
async function getTodosLosModelos(): Promise<Modelo[]> {
  try {
    const todasLasModelos = await Promise.all(
      CIUDADES.map(ciudad => getModelosPorCiudad(ciudad))
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
      CIUDADES.map(async (ciudad) => {
        const modelos = await getModelosPorCiudad(ciudad);
        const ciudadLimpia = ciudad.replace(/([A-Z])/g, ' $1').trim();
        resultado[ciudadLimpia] = modelos;
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
      CIUDADES.map(async (ciudad) => {
        const modelos = await getModelosPorCiudad(ciudad);
        const ciudadLimpia = ciudad.replace(/([A-Z])/g, ' $1').trim();
        estadisticas[ciudadLimpia] = modelos.length;
      })
    );
    
    return estadisticas;
  } catch (error) {
    console.error("Error obteniendo estadísticas:", error);
    return {};
  }
}

// Exportar funciones
export {
  CIUDADES,
  getModelosPorCiudad,
  getTodosLosModelos,
  getModelosAgrupadasPorCiudad,
  getEstadisticasPorCiudad
};

// Exportar por defecto todas las modelos (para mantener compatibilidad)
export default await getTodosLosModelos();