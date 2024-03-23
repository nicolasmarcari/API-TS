import { RolesRpository } from "@roles/repositories/RolesRepository";
import { Router } from "express";

const rolesRouter = Router();
const rolesRpository = new RolesRpository();

rolesRouter.post("/", (req, res) => {
  const { name } = req.body;
  const role = rolesRpository.create({ name });

  res.status(201).json(role);
});

export { rolesRouter };
