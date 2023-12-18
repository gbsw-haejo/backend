import { Request, Response, NextFunction } from 'express';
import StampService from "../services/StampService";

export default class StampController {
  private service: StampService;
  
  constructor() {
    this.service = new StampService();
  }

  async checkStamp(req: Request, res: Response, next: NextFunction) {
   try {
    const { userId, spotId } = req.body;
    await this.service.createStamp(userId, spotId);
    res.sendStatus(200);
   } catch(err) {
    res.sendStatus(400);
   }
  }

  async getStampByUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId;
      const stamps = await this.service.getStampByUserId(userId);
      res.status(200).json(stamps);
    } catch(err) {
      res.sendStatus(400);
    }
  }

  async getInfoByStampId(req: Request, res: Response, next: NextFunction) {
    try {
      const stampId = parseInt(req.params.stampId);
      const info = await this.service.getInfoByStampId(stampId);
      res.status(200).json(info);
    } catch(err) {
      res.sendStatus(400);
    }
  }
}