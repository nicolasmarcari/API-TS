import { DataSource } from "typeorm";
import { CreateRolesTable1712416385102 } from "./migrations/1712416385102-CreateRolesTable";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [],
  migrations: [CreateRolesTable1712416385102],
});
