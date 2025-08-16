import "@pages/CreateTable/style.css";
import Input from "@components/Input";
import { useCreateTable } from "@contexts/createTable/createTableContext";

export default function NameTableStep() {
  const { values, setField } = useCreateTable();
  return (
    <div className="create-table-tables-list">
      <h3 className="h3-uptitle">Nome da Tabela:</h3>
      <Input value={values.name} onChange={e => setField('name', e.target.value)}/>
    </div>
  );
}
