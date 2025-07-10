import Stepper from "@components/Stepper";
import { useState } from "react";
import "@pages/CreateTable/style.css";
import CategoriesStep from "./CategoriesStep";
import Button from "@components/Button";

export default function CreateTable() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Categorias", "Participantes", "Confirmação"];

  function renderStep(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return <CategoriesStep />;
      case 1:
        break;
        //return <ParticipantsStep />;
      case 2:
        break;
        //return <ConfirmationStep />;
      default:
        return null;
    }
  }

  return (
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
            onClick={() =>
              setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
            }
          >
            {currentStep === steps.length - 1 ? "Finalizar" : "Avançar"}
          </Button>
        </div>
      </div>
    </div>
  );
}
