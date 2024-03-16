import { AppError } from "@shared/errors/appError";
import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  throw new AppError("Acesso negado");
  res.json({ message: "Opa" });
});

export { routes };
