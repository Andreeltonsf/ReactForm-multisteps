import type { FormData } from "@/App";
import { useFormContext } from "react-hook-form";
import { StepHeader } from "../../StepHeader";
import {
  StepperFooter,
  StepperNextButton,
  StepperPreviousButton,
} from "../../Stepper";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

export function PersonalDataStep() {
  const form = useFormContext<FormData>();
  return (
    <div>
      <StepHeader
        title="Dados pessoais"
        description="Conte-nos mais sobre você"
      />

      <div className="space-y-4 ">
        <div className="space-y-2">
          <Label htmlFor="firstName">Nome</Label>
          <Input
            id="firstName"
            {...form.register("personalDataStepSchema.firstName")}
          />
          {form.formState.errors.personalDataStepSchema?.firstName && (
            <small className="text-destructive ">
              {form.formState.errors.personalDataStepSchema.firstName.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Sobrenome</Label>
          <Input
            id="lastName"
            {...form.register("personalDataStepSchema.lastName")}
          />
          {form.formState.errors.personalDataStepSchema?.lastName && (
            <small className="text-destructive ">
              {form.formState.errors.personalDataStepSchema.lastName.message}
            </small>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="document">CPF</Label>
          <Input
            id="document"
            {...form.register("personalDataStepSchema.document")}
          />
          {form.formState.errors.personalDataStepSchema?.document && (
            <small className="text-destructive ">
              {form.formState.errors.personalDataStepSchema.document.message}
            </small>
          )}
        </div>
      </div>

      <StepperFooter>
        <StepperPreviousButton />
        <StepperNextButton
          disabled={form.formState.isSubmitting}
          type="submit"
          preventDefault
        />
      </StepperFooter>
    </div>
  );
}
