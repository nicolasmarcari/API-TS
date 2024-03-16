import express from "express";
import "express-async-errors";
import cors from "cors";

const app = express();
app.use(cors());

const PORT: number = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Opa" });
});

app.listen(PORT, () => {
  console.log(`Server rodando na porta: ${PORT}`);
});
