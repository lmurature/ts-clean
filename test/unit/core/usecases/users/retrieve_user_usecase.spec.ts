import { UsersRepository } from '../../../../../src/core/repositories/mercadolibre';
import { UsersRepositoryImpl } from '../../../../../src/repositories/mercadolibre';
import { RetrieveUserUsecase } from '../../../../../src/core/usecases';
import { User } from '../../../../../src/core/entities';

describe('Retrieve User Usecase', () => {
  let retrieveUserUsecase: RetrieveUserUsecase;
  let userRepository: UsersRepository;

  test('User found', async () => {
    userRepository = new UsersRepositoryImpl();
    retrieveUserUsecase = new RetrieveUserUsecase(userRepository);

    const mockedUserId: number = 123;

    jest
      .spyOn(userRepository, 'getUser')
      .mockImplementationOnce(async (userId: number) => {
        return {
          id: 123,
          firstName: '',
          lastName: '',
          email: '',
          nickname: 'TESTUSER',
        };
      });

    try {
      const { user } = await retrieveUserUsecase.get({ userId: mockedUserId });
      const expectedUser = new User({
        id: 123,
        firstName: '',
        lastName: '',
        email: '',
        nickname: 'TESTUSER',
      });

      expect(user).toEqual(expectedUser);
    } catch (err) {
      expect(err).toBe(null);
    }
  });

  test('User get exception', async () => {
    userRepository = new UsersRepositoryImpl();
    retrieveUserUsecase = new RetrieveUserUsecase(userRepository);

    const mockedUserId: number = 123;

    jest
      .spyOn(userRepository, 'getUser')
      .mockImplementationOnce(async (userId: number) => {
        throw Error('user 123 not found');
      });

    try {
      const { user } = await retrieveUserUsecase.get({ userId: mockedUserId });
    } catch (err) {
      expect(err).toEqual(Error('user 123 not found'));
    }
  });
});
