import { createContext, useContext } from "react";

interface IStepperContextValue {
  previousStep: () => void;
  nextStep: () => void;
}

export const StepperContext = createContext({} as IStepperContextValue);

export function useStepper() {
  return useContext(StepperContext);
}
