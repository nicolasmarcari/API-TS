import { Role } from "@roles/entities/Role";
import { Router } from "express";

const rolesRouter = Router();

const roles: Role[] = [];

rolesRouter.post("/", (req, res) => {
  const { name } = req.body;

  const role = new Role();
  //Faz o merge entre os dois objetos
  Object.assign(role, {
    name,
    created_at: new Date(),
  });

  roles.push(role);

  res.status(201).json(role);
});

export { rolesRouter };
