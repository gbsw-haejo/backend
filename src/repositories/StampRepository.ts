import { Repository } from 'typeorm';
import { DatabaseSource } from '../config/typeorm.config';
import { StampEntity, UserEntity, TouristSpotEntity } from '../entities';


export default class StampRepository {
  private repository: Repository<StampEntity>
  private userRepository: Repository<UserEntity>
  private touristSpotRepository: Repository<TouristSpotEntity>
  constructor() {
    this.repository = DatabaseSource.getRepository(StampEntity);
    this.userRepository = DatabaseSource.getRepository(UserEntity);
    this.touristSpotRepository = DatabaseSource.getRepository(TouristSpotEntity);
  }

  async createStamp(userId: string, spotId: number): Promise<void> {
    const user = await this.userRepository.findOne({ where: { userId } });
    const touristSpot = await this.touristSpotRepository.findOne({ where: { spotId } });

    if (user && touristSpot) {
      const stamp = new StampEntity();
      stamp.user = user;
      stamp.spot = touristSpot;
      this.repository.save(stamp);
    }
  }

  async findAllStampByUserId(userId: string): Promise<StampEntity[] | null> {
    return this.repository.find({
      where: {
        user: { userId }
      },
      relations: ["user", "spot"]
    });
  }

  async findInfoByStampId(stampId: number): Promise<StampEntity | null> {
    return this.repository.findOne({
      where: {
        stampId
      },
      relations: ["user", "spot"]
    });
  }
} 
