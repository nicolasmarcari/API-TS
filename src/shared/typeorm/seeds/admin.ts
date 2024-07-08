import { v4 as uuidv4 } from "uuid";
import { dataSource } from "@shared/typeorm";
import { hash } from "bcryptjs";

async function create() {
  const connection = await dataSource.initialize();
  // Create Role
  const roleId = uuidv4();
  await connection.query(`
    INSERT INTO roles(id, name)
    VALUES('${roleId}', 'T.I')
    `);
  // Create User
  const userId = uuidv4();
  const password = await hash("1234", 10);
  await connection.query(`
    INSERT INTO users(id, name, email, password, "isAdmin", roleId)
    VALUES('${userId}', 'admin', 'admin@ad.com', '${password}', true, '${roleId}')
    `);
}

create().then(() => console.log("User Admin criado!"));
