import { Stepper } from "./components/Stepper";
import { AccountStep } from "./components/steps/AccountStep";
import { AdressStep } from "./components/steps/AdressStep";

import { PersonalDataStep } from "./components/steps/PersonalDataStep";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen flex justify-center pt-40">
      <Stepper
        initialStep={0}
        steps={[
          {
            label: "Conta",
            content: <AccountStep />,
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
      <Toaster />
    </div>
  );
}

export default App;
