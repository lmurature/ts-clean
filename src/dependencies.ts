import {
  UsersControllerImpl,
  PingControllerImpl,
} from './core/controllers/impl';
import { RetrieveUserUsecase } from './core/usecases/users';
import { UsersRepositoryImpl } from './repositories/mercadolibre';

const usersRepository = new UsersRepositoryImpl();
const retrieveUserUsecase = new RetrieveUserUsecase(usersRepository);

const usersController = new UsersControllerImpl();
const pingController = new PingControllerImpl();

export { retrieveUserUsecase, usersController, pingController };
