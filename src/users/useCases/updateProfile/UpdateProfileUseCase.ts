import { inject, injectable } from "tsyringe";
import { compare, hash } from "bcryptjs";
import { AppError } from "@shared/errors/appError";
import { User } from "@users/entities/User";
import { IUsersRepository } from "@users/repositories/IUsersRepository";

type UpdateProfileDTO = {
  userId: string;
  name: string;
  email: string;
  password?: string;
  old_password?: string;
};

@injectable()
export class UpdateProfileUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository,
  ) {}

  async execute({
    userId,
    name,
    email,
    password,
    old_password,
  }: UpdateProfileDTO): Promise<User> {
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new AppError("Usuário não foi encontrado.", 404);
    }
    const userUpdateEmail = await this.usersRepository.findByEmail(email);
    if (userUpdateEmail && userUpdateEmail.id !== userId) {
      throw new AppError("Já existe um usuário com esse e-mail");
    }
    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);
      if (!checkOldPassword) {
        throw new AppError("Senha antiga não coincide com a senha armazenada.");
      }
      user.password = await hash(password, 10);
    }
    user.name = name;
    user.email = email;
    return this.usersRepository.save(user);
  }
}
