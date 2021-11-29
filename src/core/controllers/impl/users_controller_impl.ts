import { Request, Response } from 'express';
import { retrieveUserUsecase } from '../../../dependencies';
import { UsersController } from '../users_controller';

class UsersControllerImpl implements UsersController {
  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const { user } = await retrieveUserUsecase.get({
        userId: parseInt(req.params.userId, 10),
      });
      res.json(user);
    } catch (err) {
      res.json(err);
    }
  }
}

export { UsersControllerImpl };
