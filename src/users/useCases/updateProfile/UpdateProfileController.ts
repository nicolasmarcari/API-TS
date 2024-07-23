import { Request, Response } from "express";
import { container } from "tsyringe";
import { instanceToInstance } from "class-transformer";
import { UpdateProfileUseCase } from "./UpdateProfileUseCase";

export class UpdateProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateProfileController = container.resolve(UpdateProfileUseCase);
    const userId = request.user.id;
    const { name, email, password, old_password } = request.body;
    const user = await updateProfileController.execute({
      userId,
      name,
      email,
      password,
      old_password,
    });
    return response.json(instanceToInstance(user));
  }
}
