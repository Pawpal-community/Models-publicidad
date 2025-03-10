// src/types/cloudinary.d.ts
export interface CloudinaryImage {
    public_id: string;
    secure_url: string;
    context?: {
      custom?: {
        alt?: string;
      };
    };
    width?: number;
    height?: number;
    format?: string;
    created_at?: string;
  }

  export interface Foto {
    url: string;
    alt: string;
  }
  
  export interface Modelo {
    nombre: string;
    fotos: Foto[];
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