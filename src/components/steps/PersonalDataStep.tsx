import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { StepHeader } from "../StepHeader";
import {
  StepperFooter,
  StepperNextButton,
  StepperPreviousButton,
} from "../Stepper";
import { useStepper } from "../Stepper/useStepper";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const personalDataStepSchema = z.object({
  firstName: z.string().min(2, "Informe o seu primeiro nome"),
  lastName: z.string().min(2, "Informe o seu sobrenome"),
  document: z.string().min(11, "Informe o seu CPF"),
});

type FormData = z.infer<typeof schema>;

export function PersonalDataStep() {
  const { nextStep } = useStepper();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      document: "",
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
        title="Dados pessoais"
        description="Conte-nos mais sobre você"
      />

      <div className="space-y-4 ">
        <div className="space-y-2">
          <Label htmlFor="firstName">Nome</Label>
          <Input id="firstName" {...form.register("firstName")} />
          {form.formState.errors.firstName && (
            <small className="text-destructive ">
              {form.formState.errors.firstName.message}
            </small>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Sobrenome</Label>
          <Input id="lastName" {...form.register("lastName")} />
          {form.formState.errors.lastName && (
            <small className="text-destructive ">
              {form.formState.errors.lastName.message}
            </small>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="document">CPF</Label>
          <Input id="document" {...form.register("document")} />
          {form.formState.errors.document && (
            <small className="text-destructive ">
              {form.formState.errors.document.message}
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
    </form>
  );
}
