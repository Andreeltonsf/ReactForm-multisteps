import { cn } from "@/lib/utils";
import { useCallback, useState } from "react";
import { Button } from "./ui/button";

interface StepperProps {
  initialStep?: number;
  steps: {
    label: string;
    content: React.ReactNode;
  }[];
}

export function Stepper({ steps, initialStep = 0 }: StepperProps) {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const previousStep = useCallback(() => {
    setCurrentStep((prevState) => Math.max(0, prevState - 1));
  }, []);

  const nextStep = useCallback(() => {
    setCurrentStep((prevState) => Math.min(steps.length - 1, prevState + 1));
  }, [steps]);

  return (
    <div>
      <ul className="space-x-6 text-xs">
        {steps.map((steps, index) => (
          <li
            key={steps.label}
            className={cn(
              "inline-block text-xs px-2 py-1 rounded-md",
              index === currentStep && "bg-primary text-primary-foreground",
              index < currentStep && "bg-green-500 "
            )}
          >
            {String(index + 1).padStart(2, "0")}. {steps.label}
          </li>
        ))}
      </ul>
      <div className="mt-10">{steps[currentStep].content}</div>
    </div>
  );
}

//Composition Pattern

export function StepperPreviousButton() {
  return (
    <Button size="sm" variant="secondary" type="button">
      Anterior
    </Button>
  );
}

export function StepperNextButton() {
  return (
    <Button size="sm" type="button">
      Próximo
    </Button>
  );
}
