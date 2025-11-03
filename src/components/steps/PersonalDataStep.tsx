import { StepHeader } from "../StepHeader";
import {
  StepperFooter,
  StepperNextButton,
  StepperPreviousButton,
} from "../Stepper";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function PersonalDataStep() {
  return (
    <div>
      <StepHeader
        title="Dados pessoais"
        description="Conte-nos mais sobre você"
      />

      <div className="space-y-4 ">
        <div className="space-y-2">
          <Label htmlFor="firstName">Nome</Label>
          <Input id="firstName" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Sobrenome</Label>
          <Input id="lastName" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="document">CPF</Label>
          <Input id="document" />
        </div>
      </div>

      <StepperFooter>
        <StepperPreviousButton />
        <StepperNextButton />
      </StepperFooter>
    </div>
  );
}
