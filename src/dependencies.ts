import { RetrieveUserUsecase } from './core/usecases/users';
import { UsersRepositoryImpl } from './repositories/mercadolibre';

const usersRepository = new UsersRepositoryImpl();
const retrieveUserUsecase = new RetrieveUserUsecase(usersRepository);

export { retrieveUserUsecase };
