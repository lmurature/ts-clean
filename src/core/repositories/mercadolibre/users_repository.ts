import { User } from "../../entities/users";

export interface UsersRepository {
  getUser(userId: number): Promise<User>;
  getInformation(accessToken: string): Promise<User>;
}