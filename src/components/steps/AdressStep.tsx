import { StepHeader } from "../StepHeader";
import { StepperFooter, StepperPreviousButton } from "../Stepper";
import { Button } from "../ui/button";

export function AdressStep() {
  return (
    <div>
      <StepHeader
        title="Endereço"
        description="Preencha os dados do seu endereço"
      />
      <StepperFooter>
        <StepperPreviousButton />
        <Button type="submit" size="sm">
          Finalizar
        </Button>
      </StepperFooter>
    </div>
  );
}
