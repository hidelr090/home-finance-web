import Button from "@components/Button";
import "@pages/MyTables/style.css";
import { Pencil, Percent, Trash2 } from "lucide-react";
import { useState } from "react";

type TableData = {
  id: string;
  name: string;
  createdBy: string;
  createdAt: string;
};
export default function MyTables() {
  const [tables, setTables] = useState<TableData[]>([
    {
      id: "1",
      name: "Contas Mensais",
      createdBy: "Hidel",
      createdAt: "2024-07-01",
    },
    {
      id: "2",
      name: "Investimentos",
      createdBy: "Hidel",
      createdAt: "2024-07-05",
    },
  ]);

  const handleDelete = (id: string) => {
    setTables((prev) => prev.filter((table) => table.id !== id));
  };
  return (
    <div className="tables-container">
      <h1 className="tables-title">Orcamento do Mes de Julho</h1>
      <Button className="launch-button">
        Adicionar Lançamento
      </Button>
      <div className="grid">
        <div className="tables-list">
          <h3 className="tables-subtitle">Despesas:</h3>
          <div className="table-header">
            <span>Descricao</span>
            <span>Valor</span>
            <span>Data</span>
            <span>Categoria</span>
            <span>Ações</span>
          </div>

          {tables.map((table) => (
            <div className="table-row" key={table.id}>
              <span>{table.name}</span>
              <span>{table.createdBy}</span>
              <span>{new Date(table.createdAt).toLocaleDateString()}</span>
              <span>Categoria</span>
              <span className="button-span-group">
                <Button
                  className="icon-button"
                  onClick={() => handleDelete(table.id)}
                  title="Excluir tabela"
                >
                  <Trash2 size={16} />
                </Button>
                <Button
                  className="icon-button"
                  onClick={() => handleDelete(table.id)}
                  title="Excluir tabela"
                >
                  <Pencil size={16} />
                </Button>
                <Button
                  className="icon-button"
                  onClick={() => handleDelete(table.id)}
                  title="Excluir tabela"
                >
                  <Percent size={16} />
                </Button>
              </span>
            </div>
          ))}
        </div>

        <div className="tables-list">
          <h3 className="tables-subtitle">Entradas:</h3>
          <div className="table-header">
            <span>Descricao</span>
            <span>Valor</span>
            <span>Data</span>
            <span>Categoria</span>
            <span>Ações</span>
          </div>

          {tables.map((table) => (
            <div className="table-row" key={table.id}>
              <span>{table.name}</span>
              <span>{table.createdBy}</span>
              <span>{new Date(table.createdAt).toLocaleDateString()}</span>
              <span>Categoria</span>
              <span className="button-span-group">
                <Button
                  className="icon-button"
                  onClick={() => handleDelete(table.id)}
                  title="Excluir tabela"
                >
                  <Trash2 size={16} />
                </Button>
                <Button
                  className="icon-button"
                  onClick={() => handleDelete(table.id)}
                  title="Excluir tabela"
                >
                  <Pencil size={16} />
                </Button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
