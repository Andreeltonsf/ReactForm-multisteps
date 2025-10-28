import { StepperNextButton, StepperPreviousButton } from "../Stepper";

export function PersonalDataStep() {
  return (
    <div>
      Crie sua conta
      <StepperPreviousButton />
      <StepperNextButton />
    </div>
  );
}
