import z from "zod";

export const AccountStepSchema = z.object({
  email: z.string().email("Informe um e-mail válido"),
  password: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
});
