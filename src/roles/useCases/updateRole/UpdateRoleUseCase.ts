import { Role } from "@roles/entities/Role";
import { IRolesRepository } from "@roles/repositories/IRolesRepository";
import { AppError } from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";

type UpdateRoleDTO = {
  id: string;
  name: string;
};

@injectable()
export class UpdateRoleUseCase {
  constructor(
    @inject("RolesRepository")
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({ id, name }: UpdateRoleDTO): Promise<Role> {
    const role = await this.rolesRepository.findById(id);
    if (!role) {
      throw new AppError("Role not found", 404);
    }
    const roleWithSameName = await this.rolesRepository.findByName(name);
    if (roleWithSameName && role.name === roleWithSameName.name) {
      throw new AppError("Role name already in use or not fond");
    }
    role.name = name;
    return this.rolesRepository.save(role);
  }
}
