import Button from "@components/Button";
import "@pages/CreateTable/style.css";
import { Check, Pencil, Plus, Trash2, X } from "lucide-react";
import { useState } from "react";

type Participant = {
  id: string;
  email: string;
  name: string;
  inviteStatus: string;
};

const extraParticipants = [
  {
    id: "1",
    name: "Natalia",
    email: "natalia@gmail.com",
    inviteStatus: "convite enviado",
  },
];

export default function ParticipantsStep() {
  const [participants, setParticipants] = useState<Participant[]>([]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedRow, setEditedRow] = useState<Partial<Participant>>({});

  const handleDelete = (id: string) => {
    setParticipants((prev) => prev.filter((table) => table.id !== id));
  };

  const startEditing = (table: Participant) => {
    setEditingId(table.id);
    setEditedRow(table);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditedRow({});
  };

  const saveEditing = () => {
    setParticipants((prev) =>
      prev.map((t) => (t.id === editingId ? { ...t, ...editedRow } : t))
    );
    cancelEditing();
  };

  const handlePlusButton = () => {
    setParticipants(extraParticipants);
  };

  return (
    <div className="create-table-tables-list">
      {participants.length > 0 && (
        <div className="create-table-table-header">
          <span>Nome</span>
          <span>E-mail</span>
          <span>Status do convite</span>
          <span>Acoes</span>
        </div>
      )}

      {participants.map((table) => {
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
                  type="number"
                  value={editedRow.email?.toString() ?? ""}
                  onChange={(e) =>
                    setEditedRow((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              ) : (
                `${table.email}`
              )}
            </span>
            <span>
              Enviado
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
      <Button
        className="create-table-basic-button-plus"
        onClick={handlePlusButton}
      >
        <Plus />
      </Button>
    </div>
  );
}
