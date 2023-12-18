import { DataSource } from "typeorm";
import { UserEntity, TouristSpotEntity, StampEntity, ReviewEntity } from '../entities/index'

export const DatabaseSource:DataSource = new DataSource({
  type: "mysql",
  host: "localhost", 
  port: 3306,
  username: "root", 
  password: "qwer1234", 
  database: "gbsw_2_capstone", 
  synchronize: true, 
  logging: true,
  entities: [UserEntity, TouristSpotEntity, StampEntity, ReviewEntity],
});
