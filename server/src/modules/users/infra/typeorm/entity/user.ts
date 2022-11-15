import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { IsString, IsPhoneNumber, IsEmail } from "class-validator";
import Animal from "@modules/animals/infra/typeorm/entity/animal";

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  password: string;

  @Column()
  @IsPhoneNumber()
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Animal, animal => animal.user)
  animals: Animal[];
}

export default User;
