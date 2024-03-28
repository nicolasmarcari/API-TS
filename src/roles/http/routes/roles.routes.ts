import { RolesRpository } from "@roles/repositories/RolesRepository";
import { Router } from "express";
import { createRolesController } from "@roles/useCases/createRole";

const rolesRouter = Router();
const rolesRepository = new RolesRpository();

rolesRouter.post("/", (req, res) => {
  return createRolesController.handler(req, res);
});

rolesRouter.get("/", (req, res) => {
  const roles = rolesRepository.findAll();

  return res.json(roles);
});

export { rolesRouter };
