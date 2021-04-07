import { useHttp } from "../hooks/useHttp";
import { API_URL } from "../hooks/api";

export function useCategories() {
  const { response } = useHttp(`${API_URL}/categories`);

  return response;
}
