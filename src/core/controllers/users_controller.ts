import { Request, Response } from 'express';

interface UsersController {
  getUser(req: Request, res: Response): Promise<void>;
}

export { UsersController };
