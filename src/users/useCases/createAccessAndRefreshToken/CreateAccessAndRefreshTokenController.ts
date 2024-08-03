import { container } from "tsyringe";
import { CreateAccessAndRefreshTokenUseCase } from "./CreateAccessAndRefreshTokenUseCase";
import { Request, Response } from "express";
import { instanceToInstance } from "class-transformer";

export class CreateAccessAndRefreshTokenController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createAccessAndRefreshToken = container.resolve(
      CreateAccessAndRefreshTokenUseCase,
    );
    const user_id = req.user.id;
    const { refresh_token } = req.body;

    const { user, accessToken, refreshToken } =
      await createAccessAndRefreshToken.execute({
        user_id,
        refresh_token,
      });
    return res.status(201).json(
      instanceToInstance({
        user,
        accessToken,
        refreshToken,
      }),
    );
  }
}
