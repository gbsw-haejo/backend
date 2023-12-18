import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';


export default class AuthController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      await this.userService.register(req.body);
      res.sendStatus(201);
    } catch(err) {
      res.sendStatus(400);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, password } = req.body;
      const token = await this.userService.login(userId, password);
      res.status(200).json(token);
    } catch(err) {
      res.sendStatus(400);
    }
  }
}