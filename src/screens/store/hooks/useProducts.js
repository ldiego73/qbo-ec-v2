import { useHttp } from "@hooks/useHttp";
import { API_URL } from "@hooks/api";

export function useProducts() {
    const { response } = useHttp(`${API_URL}/products`);

    return response;
}