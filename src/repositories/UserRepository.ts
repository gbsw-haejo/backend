import { Repository } from 'typeorm';
import { DatabaseSource } from '../config/typeorm.config';
import { UserEntity } from '../entities';


export default class UsersRepository {
  private repository: Repository<UserEntity>
  constructor() {
    this.repository = DatabaseSource.getRepository(UserEntity);
  }

  async createUser(data: {
    userId: string,
    email: string,
    salt: string,
    password: string,
    name: string,
    birthdate: Date,
  }): Promise<UserEntity> {
    return this.repository.save(data);
  }

  async findOneByUserId(userId: string): Promise<UserEntity | null> {
    return this.repository.findOne({ where: { userId } });
  }
   
  
} 
