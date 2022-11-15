import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { IsString, IsNumber, IsNotEmpty } from "class-validator";
import User from "@modules/users/infra/typeorm/entity/user";

@Entity()
class Animal {
  @PrimaryGeneratedColumn()
  id?: number;

  @IsString()
  @Column()
  @IsNotEmpty()
  type: string;

  @Column()
  @IsNumber()
  age?: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, user => user.animals)
  user: User;
}

export default Animal;
