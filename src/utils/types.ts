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

  // types.ts
export interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  // otras propiedades de Cloudinary...
}

export interface Foto {
  public_id: string;
  url: string;
}

export interface Modelo {
  nombre: string;
  ciudad: string;              // Nombre legible: "San Pedro Sula"
  carpetaOrigen: string;       // Nombre exacto en Cloudinary: "SanPedroSula"
  rutaCompleta: string;        // Ruta completa: "SanPedroSula/Maria_Rodriguez"
  fotos: Foto[];
}

export interface Folder {
  name: string;
  path: string;
}

export interface CloudinaryResource {
  resources: CloudinaryImage[];
}