import z from "zod";

export const adressStepSchema = z.object({
  state: z.string().min(2, "Informe o seu estado"),
  city: z.string().min(2, "Informe o sua cidade"),
  address: z.string().min(4, "Informe o seu endereço"),
});
