import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bookingCode: string;

  @Column()
  hotelId: string;

  @Column()
  status: string;

  @Column()
  title: string;
}
