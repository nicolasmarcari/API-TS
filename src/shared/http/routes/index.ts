import { Router } from "express";
import { rolesRouter } from "@roles/http/routes/roles.routes";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Opa" });
});

routes.use("/roles", rolesRouter);

export { routes };
