import { User } from '../../entities';

interface UsersRepository {
  getUser(userId: number): Promise<User>;
  getInformation(accessToken: string): Promise<User>;
}

export { UsersRepository };
