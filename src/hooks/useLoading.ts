import { LoadingContext } from "@contexts/loading/loadingContext";
import { useContext } from "react";

export const useLoading = () => useContext(LoadingContext);