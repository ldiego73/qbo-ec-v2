import { useHttp } from "@hooks/useHttp";
import { API_URL } from "@hooks/api";
import { mapToModel } from "@store/core/products.mapper";
import { useEffect, useState } from "react";

export function useProductById(id) {
  const [product, setProduct] = useState(null);
  const [isRedirect, setIsRedirect] = useState(false);
  const { response } = useHttp(`${API_URL}/products`);

  useEffect(() => {
    if (!response) return;

    const newId = id ? parseInt(id, 10) : null;

    if (!newId) {
      setIsRedirect(true);
      return;
    }

    const p = response.find((_p) => _p.id === newId);

    if (!p) {
      setIsRedirect(true);
      return;
    }

    setProduct(mapToModel(p));
  }, [id, response]);

  return { product, isRedirect };
}
