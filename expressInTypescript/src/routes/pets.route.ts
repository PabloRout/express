import { type Router as typeRouter, Router } from "express";
import { getPets } from "../controllers/pets.controller.js";
import { getPetById } from "../controllers/getPet.controller.js";
import { validateNumericId } from "../middleware/pet.middleware.js";

export const petRouter: typeRouter = Router();

petRouter.get("/", getPets);

petRouter.get("/:id", validateNumericId, getPetById);
