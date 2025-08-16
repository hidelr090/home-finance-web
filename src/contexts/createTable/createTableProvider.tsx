import { useForm } from "@hooks/useForm";
import { CreateTableContext, type CreateTableValues } from "@contexts/createTable/createTableContext";

export function CreateTableProvider ({children}: { children: React.ReactNode }) {
  const form = useForm<CreateTableValues>({
    name: '',
    usersIds: [],
    categoriesIds: [],
  });

  return <CreateTableContext.Provider value={form}>{children}</CreateTableContext.Provider>
}