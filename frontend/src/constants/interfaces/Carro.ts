import { z } from "zod";

export const CarroSchema = z.object({
  id: z.string(),
  nome: z.string(),
  marca: z.string(),
  modelo: z.string(),
  foto_url: z.string(),
  ano: z.number(),
  localizacao: z.string(),
  quilometragem: z.number(),
  valor_original: z.number(),
  valor_promocional: z.number().or(z.null()),
});

export type ICarro = z.infer<typeof CarroSchema>;
