import axios, { AxiosResponse } from 'axios';
import { User } from '../../core/entities/users';
import { UsersRepository } from '../../core/repositories/mercadolibre';

class UsersRepositoryImpl implements UsersRepository {
  async getUser(userId: number): Promise<User> {
    const json = await axios
      .get(`https://api.mercadolibre.com/users/${userId}`)
      .then((response: AxiosResponse) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
    return {
      id: json.id,
      firstName: json.first_name,
      lastName: json.last_name,
      email: json.email,
      nickname: json.nickname,
    };
  }

  getInformation(accessToken: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}

export { UsersRepositoryImpl };
