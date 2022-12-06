import { z } from "zod";

export const CarroSchema = z.object({
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

export const CarroWithIdSchema = CarroSchema.extend({
  id: z.string(),
});

export type ICarro = z.infer<typeof CarroSchema>;
export type ICarroWithId = z.infer<typeof CarroWithIdSchema>;
