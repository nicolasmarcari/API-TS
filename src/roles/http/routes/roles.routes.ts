import { RolesRpository } from "@roles/repositories/RolesRepository";
import { Router } from "express";

const rolesRouter = Router();
const rolesRepository = new RolesRpository();

rolesRouter.post("/", (req, res) => {
  const { name } = req.body;
  const roleAlreadyExists = rolesRepository.findByName(name);
  if (roleAlreadyExists) {
    res.status(400).json({ error: "Roles already exists" });
  }
  const role = rolesRepository.create({ name });

  res.status(201).json(role);
});

rolesRouter.get("/", (req, res) => {
  const roles = rolesRepository.findAll();

  res.json(roles);
});

export { rolesRouter };
