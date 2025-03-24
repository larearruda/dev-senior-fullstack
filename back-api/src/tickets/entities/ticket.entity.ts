import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

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

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column()
  priority: 'low' | 'medium' | 'high' | 'urgent'; 

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  createdBy: string;

  @Column({ nullable: true })
  assignedTo: string;

  @Column({ type: 'date', nullable: true })
  closedAt: Date | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
