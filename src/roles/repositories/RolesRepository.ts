import { Role } from "@roles/entities/Role";

type CreateRoleDTO = {
  name: string;
};

export class RolesRpository {
  private roles: Role[];
  private static INSTANCE: RolesRpository;

  private constructor() {
    this.roles = [];
  }

  public static getInstance(): RolesRpository {
    if (!RolesRpository.INSTANCE) {
      RolesRpository.INSTANCE = new RolesRpository();
    }
    return RolesRpository.INSTANCE;
  }

  create({ name }: CreateRoleDTO): Role {
    const role = new Role();
    //Faz o merge entre os dois objetos
    Object.assign(role, {
      name,
      created_at: new Date(),
    });

    this.roles.push(role);
    return role;
  }

  findAll(): Role[] {
    return this.roles;
  }

  findByName(name: string): Role | undefined {
    return this.roles.find((role) => role.name === name);
  }
}
