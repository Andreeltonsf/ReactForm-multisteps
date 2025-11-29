import { safeGetCacheValue } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useEffect } from "react";
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

const initialData = safeGetCacheValue<FormData>("account-step");

export function AccountStep() {
  const { nextStep } = useStepper();

  const form = useForm<FormData>({
    disabled: !!initialData,
    resolver: zodResolver(schema),
    defaultValues: {
      email: initialData?.email || "",
      password: initialData?.password || "",
    },
  });

  useEffect(() => {
    if (form.formState.isDirty) {
      window.onbeforeunload = () => {
        return "Você tem certeza que deseja sair?";
      };

      return () => {
        window.onbeforeunload = null;
      };
    }
  }, [form.formState.isDirty]);

  const handleSubmit = form.handleSubmit(async (formData) => {
    if (!initialData) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      sessionStorage.setItem(
        "account-step",
        JSON.stringify({
          ...formData,
          password: "*".repeat(formData.password.length),
        })
      );
    }
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
