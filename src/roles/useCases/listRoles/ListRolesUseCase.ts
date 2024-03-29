import { Role } from "@roles/entities/Role";
import { RolesRpository } from "@roles/repositories/RolesRepository";

export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRpository) {}

  execute(): Role[] {
    return this.rolesRepository.findAll();
  }
}
