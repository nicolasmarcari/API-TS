import { Role } from "@roles/entities/Role";
import { RolesRpository } from "@roles/repositories/RolesRepository";
import { AppError } from "@shared/errors/appError";

type CreateRoleDTO = {
  name: string;
};

export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRpository) {}

  execute({ name }: CreateRoleDTO): Role {
    const roleAlreadyExists = this.rolesRepository.findByName(name);
    if (roleAlreadyExists) {
      throw new AppError("Role already exists");
    }
    return this.rolesRepository.create({ name });
  }
}
