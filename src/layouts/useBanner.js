import { useEffect, useState } from "react";
import { useHttp } from "@hooks/useHttp";
import { API_URL } from "@hooks/api";

export function useBanner() {
  const [banners, setBanners] = useState(null);
  const { response } = useHttp(`${API_URL}/banners`);

  useEffect(() => {
    if (!response) return;

    const items = [];

    response.forEach(banner => {
      const { id, imagen } = banner;
      const partsImagen = imagen.split(".");
      const newImagen = `${partsImagen[0]}.jpg`;

      items.push({
        imagen: `${API_URL}/banners/${newImagen}`,
        name: `Banner ${id}`,
      });
    });

    setBanners(items);
  }, [response]);

  return banners;
}
