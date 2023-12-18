import { Repository } from 'typeorm';
import { DatabaseSource } from '../config/typeorm.config';
import { StampEntity } from '../entities';


export default class ReviewRepository {
  private repository: Repository<StampEntity>
  constructor() {
    this.repository = DatabaseSource.getRepository(StampEntity);
  }


} 
