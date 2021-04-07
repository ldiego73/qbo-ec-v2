import { useHttp } from "@hooks/useHttp";
import { API_URL } from "@hooks/api";
import { mapToModel } from "@home/core";

const OFERTAS = ["oferts", "populars"];

export function useProducts(ofertaType) {
  const { response } = useHttp(`${API_URL}/${OFERTAS[ofertaType]}`);

  return response && response.map(product => mapToModel(product));
}

