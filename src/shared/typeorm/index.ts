import { DataSource } from "typeorm";
import { CreateRolesTable1712416385102 } from "./migrations/1712416385102-CreateRolesTable";
import { Role } from "@roles/entities/Role";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Role],
  migrations: [CreateRolesTable1712416385102],
});
