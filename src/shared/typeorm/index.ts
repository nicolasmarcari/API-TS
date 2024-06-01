import { DataSource } from "typeorm";
import { CreateRolesTable1712416385102 } from "./migrations/1712416385102-CreateRolesTable";
import { Role } from "@roles/entities/Role";
import { CreateUsersTable1717256434525 } from "./migrations/1717256434525-CreateUsersTable";
import { AddRoleIDToUsersTable1717258630595 } from "./migrations/1717258630595-AddRoleIDToUsersTable";
import { User } from "@users/entities/User";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Role, User],
  migrations: [
    CreateRolesTable1712416385102,
    CreateUsersTable1717256434525,
    AddRoleIDToUsersTable1717258630595,
  ],
});
