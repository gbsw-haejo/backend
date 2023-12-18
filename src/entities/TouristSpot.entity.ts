import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tourist_spot')
export default class TouristSpotsEntity {
  @PrimaryGeneratedColumn()
  spotId: number;

  @Column({ name: 'name', type: 'varchar', length: 30, nullable: false })
  name: string;

  @Column({ name: 'description', type: 'text', nullable: false })
  description: string;

  @Column({ name: 'imagePath', type: 'varchar', length: 100, nullable: false })
  imagePath: string;

  @Column({ name: 'latitude', type: 'double', precision: 9, scale: 6, nullable: false })
  latutude: number;
  
  @Column({ name: 'longitude', type: 'double', precision: 9, scale: 6, nullable: false })
  longitude: number;

  @Column({ name: 'location', type: 'varchar', length: 45, nullable: false })
  location: string;

  @Column({ name: 'isParking', type: 'char', length: 1, nullable: false })
  isParking: string;

  @Column({ name: 'isCredit', type: 'char', length: 1, nullable: false })
  isCredit: string;

  @Column({ name: 'isPet', type: 'char', length: 1, nullable: false })
  isPet: string;

  @Column({ name: 'score', type: 'float', nullable: false })
  score: number;

  @Column({ name: 'isEvent', type: 'char', length: 1, nullable: false, default: 'N'})
  isEvent: string;
}