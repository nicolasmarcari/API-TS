import { Router } from "express";
import { rolesRouter } from "@roles/http/routes/roles.routes";
import { usersRouter } from "@users/http/user.routes";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Opa" });
});

routes.use("/roles", rolesRouter);
routes.use("/users", usersRouter);

export { routes };
