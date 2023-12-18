import { StampEntity } from "../entities";
import StampRepository from "../repositories/StampRepository"

export default class StampService {
  private repository: StampRepository;

  constructor() {
    this.repository = new StampRepository();
  }

  async createStamp(userId: string, spotId: number): Promise<void> {
    this.repository.createStamp(userId, spotId);
  }

  async getStampByUserId(userId: string): Promise<StampEntity[] | null> {
    return this.repository.findAllStampByUserId(userId);
  }

  async getInfoByStampId(stampId: number): Promise<StampEntity | null> {
    return this.repository.findInfoByStampId(stampId);
  }
}