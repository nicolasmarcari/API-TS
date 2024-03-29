import { Router } from "express";
import { createRolesController } from "@roles/useCases/createRole";
import { listRolesController } from "@roles/useCases/listRoles";

const rolesRouter = Router();

rolesRouter.post("/", (req, res) => {
  return createRolesController.handle(req, res);
});

rolesRouter.get("/", (req, res) => {
  return listRolesController.handle(req, res);
});

export { rolesRouter };
