import { Repository } from 'typeorm';
import { DatabaseSource } from '../config/typeorm.config';
import { TouristSpotEntity } from '../entities';


export default class TouristSpotRepository {
  private repository: Repository<TouristSpotEntity>
  constructor() {
    this.repository = DatabaseSource.getRepository(TouristSpotEntity);
  }

  async findSpotsByTopRating(count: number): Promise<TouristSpotEntity[] | null> {
    // return new TouristSpotEntity();
    // return this.repository.createQueryBuilder('touristSpot')
    // .select()
    return this.repository.find();
  }

  async findSpotById(spotId: number): Promise<TouristSpotEntity | null> {
    return this.repository.findOne({ where: { spotId } });
  }
}