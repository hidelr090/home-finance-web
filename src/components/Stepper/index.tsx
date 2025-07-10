
import React from "react";
import "@components/Stepper/style.css";

type StepperProps = {
  steps: string[];
  currentStep: number;
};

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="stepper">
      {steps.map((label, index) => (
        <div key={index} className="step">
          <div
            className={`step-circle ${
              index < currentStep ? "completed" : index === currentStep ? "active" : ""
            }`}
          >
            {index + 1}
          </div>
          <span className="step-label">{label}</span>
          {index !== steps.length - 1 && <div className="step-line" />}
        </div>
      ))}
    </div>
  );
}
