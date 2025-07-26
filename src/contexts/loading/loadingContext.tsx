import { createContext, useContext } from 'react';

export const LoadingContext = createContext<{
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}>({
  isLoading: false,
  setLoading: () => {}
});

export const useLoading = () => useContext(LoadingContext);