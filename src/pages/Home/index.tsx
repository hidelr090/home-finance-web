import { useState } from "react";
import Input from "@components/Input";
import Button from "@components/Button";
import { Plus, Search, Trash2 } from "lucide-react";
import "@pages/Home/style.css";
import { useNavigate } from "react-router-dom";

type TableData = {
  id: string;
  name: string;
  createdBy: string;
  createdAt: string;
};

export default function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [tables, setTables] = useState<TableData[]>([
    { id: "1", name: "Contas Mensais", createdBy: "Hidel", createdAt: "2024-07-01" },
    { id: "2", name: "Investimentos", createdBy: "Hidel", createdAt: "2024-07-05" },
  ]);

  const handleDelete = (id: string) => {
    setTables((prev) => prev.filter((table) => table.id !== id));
  };

  const handlePlusButton = () => {
    navigate('/create-table')
  }

  return (
    <div className="tables-container">
      <h1 className="tables-title">Minhas Tabelas</h1>

      <div className="tables-search-bar">
        <Input
          placeholder="Buscar tabela..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button className="act-button"><Search/></Button>
        <Button className="act-button" onClick={handlePlusButton}><Plus/></Button>
      </div>

      <div className="tables-list">
        <div className="table-header">
          <span>Nome</span>
          <span>Criada por</span>
          <span>Criada em</span>
          <span>Valor Atual</span>
          <span>Ações</span>
        </div>

        {tables.map((table) => (
          <div className="table-row" key={table.id}>
            <span>{table.name}</span>
            <span>{table.createdBy}</span>
            <span>{new Date(table.createdAt).toLocaleDateString()}</span>
            <span>R$ 1000,00</span>
            <span>
              <Button
                className="icon-button"
                onClick={() => handleDelete(table.id)}
                title="Excluir tabela"
              >
                <Trash2 size={16} />
              </Button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
