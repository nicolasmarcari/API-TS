import { AppError } from "@shared/errors/appError";
import { NextFunction, Request, Response } from "express";
import { Secret, verify } from "jsonwebtoken";
import authConfig from "@config/auth";

type JwtPayloadProps = {
  sub: string;
};

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new AppError("Falha na verificação do token de acesso", 401);
  }
  const token = authHeader.replace("Bearer ", "");
  try {
    const decodedToken = verify(token, authConfig.jwt.secret as Secret);
    const { sub } = decodedToken as JwtPayloadProps;
    req.user = { id: sub };
    return next();
  } catch {
    throw new AppError("Token de autenticação invalido", 401);
  }
};
