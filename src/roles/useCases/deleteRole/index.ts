import { RolesRpository } from "@roles/repositories/RolesRepository";
import { DeleteRoleUseCase } from "./DeleteRoleUseCase";
import { DeleteRoleController } from "./DeleteRoleController";

const rolesRepository = RolesRpository.getInstance();
const deleteRoleUseCase = new DeleteRoleUseCase(rolesRepository);
export const deleteRolesController = new DeleteRoleController(
  deleteRoleUseCase,
);
