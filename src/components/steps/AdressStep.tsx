import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { StepHeader } from "../StepHeader";
import { StepperFooter, StepperPreviousButton } from "../Stepper";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const adressStepSchema = z.object({
  state: z.string().min(2, "Informe o seu estado"),
  city: z.string().min(2, "Informe o sua cidade"),
  address: z.string().min(4, "Informe o seu endereço"),
});

type FormData = z.infer<typeof schema>;

export function AdressStep() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      state: "",
      city: "",
      address: "",
    },
  });

  const handleSubmit = form.handleSubmit(async (formData) => {
    console.log(formData);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    /// Redirecionar para outra página ou exibir uma mensagem de sucesso
    toast.success("Formulário preenchido com sucesso!");
  });
  return (
    <form onSubmit={handleSubmit}>
      <StepHeader
        title="Endereço"
        description="Preencha os dados do seu endereço"
      />

      <div className="space-y-4 ">
        <div className="space-y-2">
          <Label htmlFor="state">Estado</Label>
          <Input id="state" {...form.register("state")} />
          {form.formState.errors.state && (
            <small className="text-destructive ">
              {form.formState.errors.state.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">Cidade</Label>
          <Input id="city" {...form.register("city")} />
          {form.formState.errors.city && (
            <small className="text-destructive ">
              {form.formState.errors.city.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Endereço</Label>
          <Input id="address" {...form.register("address")} />
          {form.formState.errors.address && (
            <small className="text-destructive ">
              {form.formState.errors.address.message}
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
    </form>
  );
}
