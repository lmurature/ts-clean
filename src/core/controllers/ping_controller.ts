import { Request, Response } from 'express';

interface PingController {
  ping(req: Request, res: Response): void;
}

export { PingController };
