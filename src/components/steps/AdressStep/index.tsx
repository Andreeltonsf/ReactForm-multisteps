import type { FormData } from "@/App";
import { useFormContext } from "react-hook-form";
import { StepHeader } from "../../StepHeader";
import { StepperFooter, StepperPreviousButton } from "../../Stepper";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

export function AdressStep() {
  const form = useFormContext<FormData>();

  return (
    <div>
      <StepHeader
        title="Endereço"
        description="Preencha os dados do seu endereço"
      />

      <div className="space-y-4 ">
        <div className="space-y-2">
          <Label htmlFor="state">Estado</Label>
          <Input id="state" {...form.register("adressStepSchema.state")} />
          {form.formState.errors.adressStepSchema?.state && (
            <small className="text-destructive ">
              {form.formState.errors.adressStepSchema.state.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">Cidade</Label>
          <Input id="city" {...form.register("adressStepSchema.city")} />
          {form.formState.errors.adressStepSchema?.city && (
            <small className="text-destructive ">
              {form.formState.errors.adressStepSchema.city.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Endereço</Label>
          <Input id="address" {...form.register("adressStepSchema.address")} />
          {form.formState.errors.adressStepSchema?.address && (
            <small className="text-destructive ">
              {form.formState.errors.adressStepSchema.address.message}
            </small>
          )}
        </div>
      </div>

      <StepperFooter>
        <StepperPreviousButton disabled={form.formState.isSubmitting} />
        <Button disabled={form.formState.isSubmitting} type="submit" size="sm">
          Finalizar
        </Button>
      </StepperFooter>
    </div>
  );
}
