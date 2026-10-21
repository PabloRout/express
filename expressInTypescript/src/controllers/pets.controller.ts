import type { Request, Response } from "express";
import { pets } from "../data/pets.js";
import type { Pet } from "../data/pets.js";

export type petQueryParams = {
  species?: string;
  adopted?: "true" | "false";
  minAge?: string;
  maxAge?: string;
};

export const getPets = (
  request: Request<{}, unknown, {}, petQueryParams>,
  response: Response<Pet[]>,
): void => {
  const { species, adopted, minAge, maxAge } = request.query;

  let filteredPets: Pet[] = pets;

  if (species) {
    filteredPets = filteredPets.filter(
      (pet: Pet): boolean =>
        pet.species.toLocaleLowerCase() === species.toLowerCase(),
    );
  }

  if (adopted) {
    filteredPets = filteredPets.filter(
      (pet: Pet): boolean => pet.adopted === JSON.parse(adopted),
    );
  }

  if (minAge) {
    filteredPets = filteredPets.filter(
      (pet: Pet): boolean => pet.age >= JSON.parse(minAge),
    );
  }

  if (maxAge) {
    filteredPets = filteredPets.filter(
      (pet: Pet): boolean => pet.age <= JSON.parse(maxAge),
    );
  }

  response.json(filteredPets);
};

