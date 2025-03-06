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

const { folders } = await cloudinary.api.sub_folders("SanPedroSula");

const images: Modelo[] = await Promise.all(
  folders.map(async (folder: Folder) => {
    const result = await cloudinary.search
      .expression(`folder:${folder.path}`) 
      .execute();

    return {
      nombre: folder.name.replace(/_/g, ' '),
      fotos: result.resources.map((photo:CloudinaryImage )  => ({
        public_id: photo.public_id,
        url: photo.secure_url
      }))
    };
  })
);

export default images;