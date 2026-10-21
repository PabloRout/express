import type { Request, Response } from "express";
import type { Pet } from "../data/pets.js";
import { pets } from "../data/pets.js";

export const getPetById = (
  request: Request<{ id: string }>,
  response: Response<Pet | { message: string }>,
): void => {
  const { id } = request.params;

  const pet: Pet | undefined = pets.find(
    (e: Pet): boolean => e.id.toString() === id,
  );

  if (pet) response.json(pet);
  else response.status(404);
};
