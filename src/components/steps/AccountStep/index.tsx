import type { FormData } from "@/App";
import { useStepper } from "@/components/Stepper/useStepper";
import { Label } from "@radix-ui/react-label";
import { useFormContext } from "react-hook-form";
import { StepHeader } from "../../StepHeader";
import { StepperFooter, StepperNextButton } from "../../Stepper";
import { Input } from "../../ui/input";

export function AccountStep() {
  const { nextStep } = useStepper();
  const form = useFormContext<FormData>();

  async function handleNextStep() {
    const isValid = await form.trigger("accountStepSchema");
    if (isValid) {
      nextStep();
    }
  }

  return (
    <div>
      <StepHeader
        title="Conta"
        description="Preencha os dados de acesso à platadiva"
      />

      <div className="space-y-4 ">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" {...form.register("accountStepSchema.email")} />
          {form.formState.errors.accountStepSchema?.email && (
            <small className="text-destructive">
              {form.formState.errors.accountStepSchema.email.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            {...form.register("accountStepSchema.password")}
          />
          {form.formState.errors.accountStepSchema?.password && (
            <small className="text-destructive ">
              {form.formState.errors.accountStepSchema.password.message}
            </small>
          )}
        </div>
      </div>

      <StepperFooter>
        <StepperNextButton onClick={handleNextStep} />
      </StepperFooter>
    </div>
  );
}
