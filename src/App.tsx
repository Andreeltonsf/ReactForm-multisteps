import { Stepper } from "./components/Stepper";
import { AccountStep } from "./components/steps/AccountStep";
import { AdressStep } from "./components/steps/AdressStep";

import { PersonalDataStep } from "./components/steps/PersonalDataStep";

function App() {
  return (
    <div className="min-h-screen flex justify-center pt-40">
      <Stepper
        initialStep={1}
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
    </div>
  );
}

export default App;
