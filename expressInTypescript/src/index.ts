import express, { response } from "express";
import type { Express, Request, Response } from "express";
import { pets } from "./data/pets.js";
import type { Pet } from "./data/pets.js";
import cors from "cors";
import { petRouter } from "./routes/pets.route.js";

const app: Express = express();

app.use(cors());

const PORT = 8000;

app.use("/pets", petRouter);

app.use((request: Request, response: Response): void => {
  response.status(404).json({ message: "404" });
});

app.listen(PORT, (): void => {
  console.log(`server is up and running on port ${PORT}`);
});
