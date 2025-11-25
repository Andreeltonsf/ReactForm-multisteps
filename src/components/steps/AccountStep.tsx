import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { StepHeader } from "../StepHeader";
import { StepperFooter, StepperNextButton } from "../Stepper";
import { useStepper } from "../Stepper/useStepper";
import { Input } from "../ui/input";

const schema = z.object({
  email: z.string().email("Informe um e-mail válido"),
  password: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
});

type FormData = z.infer<typeof schema>;

export function AccountStep() {
  const { nextStep } = useStepper();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = form.handleSubmit(async (formData) => {
    console.log(formData);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    nextStep();
  });
  return (
    <form onSubmit={handleSubmit}>
      <StepHeader
        title="Conta"
        description="Preencha os dados de acesso à plataforma"
      />

      <div className="space-y-4 ">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" {...form.register("email")} />
          {form.formState.errors.email && (
            <small className="text-destructive ">
              {form.formState.errors.email.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" {...form.register("password")} />
          {form.formState.errors.password && (
            <small className="text-destructive ">
              {form.formState.errors.password.message}
            </small>
          )}
        </div>
      </div>

      <StepperFooter>
        <StepperNextButton
          disabled={form.formState.isSubmitting}
          preventDefault
          type="submit"
        />
      </StepperFooter>
    </form>
  );
}
