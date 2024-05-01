import { Role } from "@roles/entities/Role";
import { RolesRpository } from "@roles/repositories/RolesRepository";
import { AppError } from "@shared/errors/appError";

type ShowRoleParams = {
  id: string;
};

export class ShowRoleUseCase {
  constructor(private rolesRepository: RolesRpository) {}

  async execute({ id }: ShowRoleParams): Promise<Role> {
    const role = await this.rolesRepository.findById(id);
    if (!role) {
      throw new AppError("Role not found", 404);
    }
    return role;
  }
}
