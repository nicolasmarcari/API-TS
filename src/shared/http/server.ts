import express from "express";
import "express-async-errors";
import cors from "cors";
import { routes } from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

const PORT: number = 3000;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server rodando na porta: ${PORT}`);
});
