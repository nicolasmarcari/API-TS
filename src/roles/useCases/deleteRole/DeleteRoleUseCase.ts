import { RolesRpository } from "@roles/repositories/RolesRepository";
import { AppError } from "@shared/errors/appError";

type DeleteRoleParams = {
  id: string;
};

export class DeleteRoleUseCase {
  constructor(private rolesRepository: RolesRpository) {}

  async execute({ id }: DeleteRoleParams): Promise<void> {
    const role = await this.rolesRepository.findById(id);
    if (!role) {
      throw new AppError("Role not found", 404);
    }
    await this.rolesRepository.delete(role);
  }
}
