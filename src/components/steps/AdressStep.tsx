import { StepperPreviousButton } from "../Stepper";
import { Button } from "../ui/button";

export function AdressStep() {
  return (
    <div>
      <h2>Address Information</h2>

      <StepperPreviousButton />
      <Button type="submit"> Finalizar</Button>
    </div>
  );
}
