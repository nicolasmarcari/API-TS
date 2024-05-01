import { RolesRpository } from "@roles/repositories/RolesRepository";
import { ShowRoleUseCase } from "./ShowRoleUseCase";
import { ShowRoleController } from "./ShowRoleController";

const rolesRepository = RolesRpository.getInstance();
const showRoleUseCase = new ShowRoleUseCase(rolesRepository);
export const showRolesController = new ShowRoleController(showRoleUseCase);
