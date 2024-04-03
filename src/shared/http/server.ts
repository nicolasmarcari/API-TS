import "reflect-metadata";
import { app } from "./app";
import { dataSource } from "../typeorm/";

const PORT: number = 3000;

dataSource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`Server rodando na porta: ${PORT}`);
  });
});
