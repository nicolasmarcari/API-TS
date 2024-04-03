import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import { routes } from "./routes";
import { AppError } from "@shared/errors/appError";
import swaggerFile from "../../swagger.json";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }
  console.log(error);
  return res.status(500).json({
    status: "Error",
    message: "Erro interno do servidor",
  });
});

export { app };
