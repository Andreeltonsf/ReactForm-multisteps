import { StepHeader } from "../StepHeader";
import { StepperFooter, StepperPreviousButton } from "../Stepper";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function AdressStep() {
  return (
    <div>
      <StepHeader
        title="Endereço"
        description="Preencha os dados do seu endereço"
      />

      <div className="space-y-4 ">
        <div className="space-y-2">
          <Label htmlFor="state">Estado</Label>
          <Input id="state" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">Cidade</Label>
          <Input id="city" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Endereço</Label>
          <Input id="address" />
        </div>
      </div>

      <StepperFooter>
        <StepperPreviousButton />
        <Button type="submit" size="sm">
          Finalizar
        </Button>
      </StepperFooter>
    </div>
  );
}
