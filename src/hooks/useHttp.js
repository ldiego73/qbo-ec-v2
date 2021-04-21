import axios from "axios";
import { useState, useEffect } from "react";

export function useHttp(url, options = {}) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Renderización de componente
    const abortController = new AbortController();
    const { signal } = abortController;
    const isNotAborted = () => !signal.aborted;

    const doHttp = async () => {
      if (isNotAborted()) {
        setLoading(true);
      }

      try {
        const { data } = await axios.get(url, options);

        if (isNotAborted()) {
          setResponse(data);
        }
      } catch (err) {
        if (isNotAborted()) {
          setError(err.message);
        }
      } finally {
        if (isNotAborted()) setLoading(false);
      }
    };

    doHttp();

    return () => {
      // Eliminación del componente
      abortController.abort();
    };
  }, []);

  return { response, error, loading };
}
