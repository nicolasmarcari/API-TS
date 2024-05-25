import { IRolesRepository } from "@roles/repositories/IRolesRepository";
import { RolesRpository } from "@roles/repositories/RolesRepository";
import { container } from "tsyringe";

container.registerSingleton<IRolesRepository>(
  "RolesRepository",
  RolesRpository,
);
