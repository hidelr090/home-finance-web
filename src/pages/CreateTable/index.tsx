import Stepper from "@components/Stepper";
import { useState } from "react";
import "@pages/CreateTable/style.css";
import Button from "@components/Button";
import CategoriesStep from "@pages/CreateTable/CategoriesStep";
import ParticipantsStep from "@pages/CreateTable/ParticipantsStep";
import NameTableStep from "@pages/CreateTable/NameTableStep";
import { useNavigate } from "react-router-dom";
import { CreateTableProvider } from "@contexts/createTable/createTableProvider";

export default function CreateTable() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Criar Tabela", "Categorias", "Participantes"];

  function renderStep(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return <NameTableStep />;
      case 1:
        return <CategoriesStep />;
      case 2:
        return <ParticipantsStep />;
      default:
        return null;
    }
  }

  function handleNextButton() {
    if (currentStep >= steps.length - 1) {
      navigate("/");
      return;
    }

    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  }

  return (
    <CreateTableProvider>
      <div>
        <Stepper steps={steps} currentStep={currentStep} />
        <div className="create-table-container">
          <h1 className="form-title">{steps[currentStep]}</h1>
          {renderStep(currentStep)}
          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
            <Button
              className="create-table-basic-button-plus"
              disabled={currentStep === 0}
              onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            >
              Voltar
            </Button>

            <Button
              className="create-table-next-step-button"
              onClick={handleNextButton}
            >
              {currentStep === steps.length - 1 ? "Finalizar" : "Avançar"}
            </Button>
          </div>
        </div>
      </div>
    </CreateTableProvider>
  );
}
