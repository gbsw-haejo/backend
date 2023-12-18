import { UserEntity, TouristSpotEntity } from '.';
import { Entity, PrimaryGeneratedColumn, CreateDateColumn,ManyToOne, JoinColumn } from 'typeorm';

@Entity('stamp')
export default class StampEntity {
  @PrimaryGeneratedColumn()
  stampId: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user' })
  user: UserEntity;
  
  @ManyToOne(() => TouristSpotEntity)
  @JoinColumn({ name: 'spot' })
  spot: TouristSpotEntity;

  @CreateDateColumn({ name: 'stampedAt', type: 'timestamp' })
  stampedAt: Date;
}