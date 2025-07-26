import { useLoading } from "@contexts/loading/loadingContext";
import { apiClient } from "@services/apiClient";
import { useEffect } from "react";

export const useApiInterceptor = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    const requestInterceptor = apiClient.interceptors.request.use(config => {
      setLoading(true);
      return config;
    });

    const responseInterceptor = apiClient.interceptors.response.use(
      response => {
        setLoading(false);
        return response;
      },
      error => {
        setLoading(false);
        return Promise.reject(error);
      }
    );

    return () => {
      apiClient.interceptors.request.eject(requestInterceptor);
      apiClient.interceptors.response.eject(responseInterceptor);
    };
  }, [setLoading]);
};
