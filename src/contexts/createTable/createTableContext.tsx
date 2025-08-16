import { createContext, useContext } from "react";
import { useForm } from "@hooks/useForm";

export type CreateTableValues = {
  name: string;
  usersIds: Array<string>;
  categoriesIds: Array<string>;
}

export const CreateTableContext = createContext<ReturnType<typeof useForm<CreateTableValues>> | null>(null);

export function useCreateTable () {
  const ctx = useContext(CreateTableContext);
  if (!ctx) throw new Error('createTable context must be used inside FormProvider');
  return ctx;
}