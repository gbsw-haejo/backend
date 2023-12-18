import { TouristSpotEntity } from "../entities";
import TouristSpotRepository from "../repositories/TouristSpotRepository"

export default class TouristService {
  private repository: TouristSpotRepository;

  constructor() {
    this.repository = new TouristSpotRepository();
  }

  async getTopRatedSpots(count: number): Promise<TouristSpotEntity[] | null> {
    return this.repository.findSpotsByTopRating(count);
  }

  async getSpotById(spotId: number): Promise<TouristSpotEntity | null> {
    return this.repository.findSpotById(spotId);
  }
}