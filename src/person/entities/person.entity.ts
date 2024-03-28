import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  lastname: string;

  @Column()
  firstname: string;

  @Column()
  dateOfBirth: Date;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column()
  dialcode: string;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  otpSecret: string;

  @Column({ nullable: true })
  otpToken: string;

  @Column({ type: 'timestamp', nullable: true })
  otpGeneratedAt: Date;

  @Column({ unique: true, nullable: false })
  taxIdentifier: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
