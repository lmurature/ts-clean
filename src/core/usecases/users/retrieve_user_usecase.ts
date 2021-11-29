import { UsersRepository } from '../../repositories/mercadolibre';
import { User } from '../../entities/users';

interface RetrieveUserUsecaseParams {
  userId: number;
}

interface RetrieveUserUsecaseResponse {
  user?: User;
}

class RetrieveUserUsecase {
  repository: UsersRepository;

  constructor(repository: UsersRepository) {
    this.repository = repository;
  }

  async get({
    userId,
  }: RetrieveUserUsecaseParams): Promise<RetrieveUserUsecaseResponse> {
    const user = await this.repository.getUser(userId);
    return {
      user,
    };
  }
}

export { RetrieveUserUsecase };
