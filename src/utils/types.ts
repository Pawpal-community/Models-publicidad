// src/types/cloudinary.d.ts
export interface CloudinaryImage {
    public_id: string;
    secure_url: string;
    context?: {
      custom?: {
        alt?: string;
      };
    };
    // Otras propiedades que necesites
    width?: number;
    height?: number;
    format?: string;
    created_at?: string;
  }
  
  export interface Modelo {
    nombre: string;
    thumbnail: string;
    fotos: CloudinaryImage[];
  }

  export interface Folder {
    name: string;
    path: string;
  }

  export interface CloudinaryResource {
    public_id: string;
    secure_url: string;
    context?: {
      custom?: {
        alt?: string;
      };
    };
  }