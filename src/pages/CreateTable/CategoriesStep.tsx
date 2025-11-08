import Button from "@components/Button";
import Dropdown from "@components/Dropdown";
import "@pages/CreateTable/style.css";
import { Check, X, Pencil, Trash2, Plus } from "lucide-react";
import { useState } from "react";
import { v4 } from 'uuid';

type TableData = {
  id: string;
  name: string;
  createdBy: string;
  createdAt: string;
  amount: number;
};

// type CategoriesStepProps = {
//   currentStep: number;
//   setCurrentStep: (step: number) => void;
//   steps: string[];
// };

export default function CategoriesStep() {
  const [tables, setTables] = useState<TableData[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedRow, setEditedRow] = useState<Partial<TableData>>({});
  const [importCategory, setImportCategory] = useState<boolean>(false);

  const handleDelete = (id: string) => {
    setTables((prev) => prev.filter((table) => table.id !== id));
  };

  const handleImportFromPreviousTable = () => {
    setImportCategory(!importCategory);
  };

  const startEditing = (table: TableData) => {
    setEditingId(table.id);
    setEditedRow(table);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditedRow({});
  };

  const saveEditing = () => {
    setTables((prev) =>
      prev.map((t) => (t.id === editingId ? { ...t, ...editedRow } : t))
    );
    cancelEditing();
  };

  const addCategory = () => {
    const newCategoryEmpty: TableData = {
      id: v4(),
      name: "",
      createdBy: "Hidel",
      createdAt: new Date().toISOString(),
      amount: 0,
    };
    setTables([...tables, newCategoryEmpty]);
    startEditing(newCategoryEmpty);
  };

  return (
    <>
      <div className="create-table-tables-list">
        <div className="create-table-table-header">
          <span>Nome</span>
          <span>Criada por</span>
          <span>Criada em</span>
          <span>Valor Maximo</span>
          <span>Ações</span>
        </div>

        {tables.map((table) => {
          const isEditing = editingId === table.id;
          return (
            <div className="create-table-table-row" key={table.id}>
              <span>
                {isEditing ? (
                  <input
                    value={editedRow.name ?? ""}
                    onChange={(e) =>
                      setEditedRow((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                ) : (
                  table.name
                )}
              </span>
              <span>
                {isEditing ? (
                  <input
                    value={editedRow.createdBy ?? ""}
                    onChange={(e) =>
                      setEditedRow((prev) => ({
                        ...prev,
                        createdBy: e.target.value,
                      }))
                    }
                  />
                ) : (
                  table.createdBy
                )}
              </span>
              <span>{new Date(table.createdAt).toLocaleDateString()}</span>
              <span>
                {isEditing ? (
                  <input
                    type="number"
                    value={editedRow.amount?.toString() ?? ""}
                    onChange={(e) =>
                      setEditedRow((prev) => ({
                        ...prev,
                        amount: parseFloat(e.target.value),
                      }))
                    }
                  />
                ) : (
                  `R$ ${table.amount.toFixed(2)}`
                )}
              </span>
              <span>
                {isEditing ? (
                  <>
                    <Button
                      className="create-table-icon-button"
                      onClick={saveEditing}
                      title="Salvar"
                    >
                      <Check size={16} />
                    </Button>
                    <Button
                      className="create-table-icon-button"
                      onClick={cancelEditing}
                      title="Cancelar"
                      style={{ marginLeft: "0.5rem" }}
                    >
                      <X size={16} />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="create-table-icon-button"
                      onClick={() => startEditing(table)}
                      title="Editar tabela"
                    >
                      <Pencil size={16} />
                    </Button>
                    <Button
                      className="create-table-icon-button"
                      onClick={() => handleDelete(table.id)}
                      style={{ marginLeft: "0.75rem" }}
                      title="Excluir tabela"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </>
                )}
              </span>
            </div>
          );
        })}
      </div>

      <Button className="create-table-basic-button-plus" onClick={addCategory}>
        <Plus />
      </Button>

      <div style={{ marginTop: "0.75rem" }}>
        <Dropdown
          options={[
            "Transporte",
            "Animais de Estimacao",
            "Investimento",
            "Animais de Estimacao",
            "Investimento",
            "Animais de Estimacao",
            "Investimento",
            "Animais de Estimacao",
            "Investimento",
            "Animais de Estimacao",
            "Investimento",
            "Animais de Estimacao",
            "Investimento",
            "Animais de Estimacao",
            "Investimento",
          ]}
          placeholder={"Importar Categorias de Panilha Anterior"}
          onSelect={() => handleImportFromPreviousTable()}
        />
      </div>
    </>
  );
}
