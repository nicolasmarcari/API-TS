import { Role } from "@roles/entities/Role";
import { RolesRpository } from "@roles/repositories/RolesRepository";
import { AppError } from "@shared/errors/appError";

type UpdateRoleDTO = {
  id: string;
  name: string;
};

export class UpdateRoleUseCase {
  constructor(private rolesRepository: RolesRpository) {}

  async execute({ id, name }: UpdateRoleDTO): Promise<Role> {
    const role = await this.rolesRepository.findById(id);
    if (!role) {
      throw new AppError("Role not found", 404);
    }
    const roleWithSameName = await this.rolesRepository.findByName(name);
    if (roleWithSameName && role.name !== roleWithSameName.name) {
      throw new AppError("Role name already in use or not fond");
    }
    role.name = name;
    return this.rolesRepository.save(role);
  }
}
