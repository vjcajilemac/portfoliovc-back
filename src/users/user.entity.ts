import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//@Todo: Cambiar por migraciones
@Entity({ name: 'users' }) //name no es necesario
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;
  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
  @Column({ nullable: true })
  auth_strategy: string;
}
