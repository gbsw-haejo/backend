import { Request, Response, NextFunction } from 'express';
import TouristService from "../services/TouristService";


export default class TouristController {
  private service: TouristService;
  
  constructor() {
    this.service = new TouristService();
  }

  async getTopRatedSpots(req: Request, res: Response, next: NextFunction) {
    const spots = await this.service.getTopRatedSpots(5);
    res.status(200).json(spots);
  }

  async getSpotById(req: Request, res: Response, next: NextFunction) {
    const spotId: number = parseInt(req.params.spotId);
    const spot = await this.service.getSpotById(spotId);
    res.status(200).json(spot);
  }

  
}