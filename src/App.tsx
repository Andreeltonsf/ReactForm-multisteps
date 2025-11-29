import { FormProvider, useForm } from "react-hook-form";
import { Stepper } from "./components/Stepper";
import { AccountStep } from "./components/steps/AccountStep";
import { AccountStepSchema } from "./components/steps/AccountStep/schema";
import { AdressStep } from "./components/steps/AdressStep";
import { adressStepSchema } from "./components/steps/AdressStep/schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PersonalDataStep } from "./components/steps/PersonalDataStep";
import { personalDataStepSchema } from "./components/steps/PersonalDataStep/schema";
import { Toaster } from "./components/ui/sonner";

const schema = z.object({
  accountStepSchema: AccountStepSchema,
  personalDataStepSchema: personalDataStepSchema,
  adressStepSchema: adressStepSchema,
});
export type FormData = z.infer<typeof schema>;

function App() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      accountStepSchema: {
        email: "",
        password: "",
      },
      personalDataStepSchema: {
        firstName: "",
        lastName: "",
        document: "",
      },
      adressStepSchema: {
        state: "",
        city: "",
        address: "",
      },
    },
  });

  const handleSubmit = form.handleSubmit((formData) => {
    console.log(formData);
  });

  return (
    <>
      <div className="min-h-screen flex justify-center pt-40">
        <FormProvider {...form}>
          <form onSubmit={handleSubmit}>
            <Stepper
              initialStep={0}
              steps={[
                {
                  label: "Conta",
                  content: <AccountStep form={form} />,
                },
                {
                  label: "Dados",
                  content: <PersonalDataStep />,
                },
                {
                  label: "Endereço",
                  content: <AdressStep />,
                },
              ]}
            />
          </form>
        </FormProvider>
        <Toaster />
      </div>
    </>
  );
}

export default App;
