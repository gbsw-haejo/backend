
import { TouristSpotEntity, UserEntity } from '.';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,ManyToOne, JoinColumn } from 'typeorm';

@Entity('review')
export default class StampEntity {
  @PrimaryGeneratedColumn()
  reviewId: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user' })
  user: UserEntity;

  @ManyToOne(() => TouristSpotEntity)
  @JoinColumn({ name: 'spot' })
  spot: TouristSpotEntity;

  @Column({ name: 'content', type: 'varchar', length: 300, nullable: false })
  content: string;

  @Column({ name: 'imagePath', type: 'varchar', length: 45, nullable: false })
  imagePath: string;
  
  @Column({ name: 'rating', type: 'decimal', precision: 3, scale: 2 })
  rating: number;

  @CreateDateColumn({ name: 'reviewdAt', type: 'timestamp' })
  reviewdAt: Date;
}