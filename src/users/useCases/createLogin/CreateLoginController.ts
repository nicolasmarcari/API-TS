import { Request, Response } from "express";
import { CreateLoginUseCase } from "./CreateLoginUseCase";
import { container } from "tsyringe";
import { instanceToInstance } from "class-transformer";

export class CreateLoginController {
  async handle(req: Request, res: Response): Promise<Response> {
    const createLoginUseCase = container.resolve(CreateLoginUseCase);
    const { email, password } = req.body;
    const { user, acessToken, refreshToken } = await createLoginUseCase.execute(
      {
        email,
        password,
      },
    );
    return res.status(201).json(
      instanceToInstance({
        user,
        acessToken,
        refreshToken,
      }),
    );
  }
}
