import { PingController } from '../ping_controller';
import { Request, Response } from 'express';

class PingControllerImpl implements PingController {
  ping(req: Request, res: Response): void {
    res.send('pong');
  }
}

export { PingControllerImpl };
