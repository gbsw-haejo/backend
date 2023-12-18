import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('user')
export default class UsersEntity {
  @PrimaryColumn({ name: 'userId', type: 'varchar', length: 20, nullable: false })
  userId: string;

  @Column({ name: 'email', type: 'varchar', length: 40, unique: true, nullable: false })
  email: string;

  @Column({ name: 'salt', type: 'char', length: 8, nullable: false, unique: true })
  salt: string;
  
  @Column({ name: 'password', type: 'char', length: 64, nullable: false })
  password: string;

  @Column({ name: 'name', type: 'char', length: 4, nullable: false })
  name: string;

  @Column({ name: 'birthdate', type: 'date', nullable: false, })
  birthdate: Date;

  @Column({ name: 'mileage', type: 'int', nullable: false, default: 0 })
  mileage: number;
}