import { DataSource } from "typeorm";
import { CreateRolesTable1719967175968 } from "./migrations/1719967175968-CreateRolesTable";
import { Role } from "@roles/entities/Role";
import { CreateUsersTable1719967395353 } from "./migrations/1719967395353-CreateUsersTable";
import { AddRoleIDToUsersTable1719967535295 } from "./migrations/1719967535295-AddRoleIDToUsersTable";
import { User } from "@users/entities/User";
import { CreateRefreshTokensTable1722180360043 } from "./migrations/1722180360043-CreateRefreshTokensTable";
import { RefreshToken } from "@users/entities/RefreshToken";
export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Role, User, RefreshToken],
  migrations: [
    CreateRolesTable1719967175968,
    CreateUsersTable1719967395353,
    AddRoleIDToUsersTable1719967535295,
    CreateRefreshTokensTable1722180360043,
  ],
});
