import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User{

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 255, nullable: true })
    name: string;
  
    @Column({ name: 'last_name', type: 'varchar', length: 255, nullable: true })
    lastName: string;
}